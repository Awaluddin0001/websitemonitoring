import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fabric } from "fabric";
import { Tooltip } from "react-tooltip";
import axios from "axios";

/* images */
import rect from "@/assets/svg/rect.svg";
import circle from "@/assets/svg/circle.svg";
import triangle from "@/assets/svg/triangle.svg";
import text from "@/assets/svg/text.svg";
import save from "@/assets/svg/save.svg";
import undoImg from "@/assets/svg/undo.svg";
import off from "@/assets/svg/closing.svg";
import uploadIcon from "@/assets/svg/upload.svg";
import HandSvg from "@/components/svg/HandSvg";

/* styles */
import styles from "@/css/module/RoomManagement.module.css";
import "react-tooltip/dist/react-tooltip.css";

type CanvasState = {
  version: string;
  objects: unknown[];
  reset: () => void;
  restore: () => void;
  save: () => void;
};

interface CustomFabricCanvas extends fabric.Canvas {
  isDragging?: boolean;
  lastPosX?: number;
  lastPosY?: number;
  state?: CanvasState[];
  index?: number;
}

const throttle = <T extends unknown[]>(
  func: (...args: T) => void,
  limit: number
) => {
  let inThrottle: boolean = false;
  return (...args: T) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const RoomManagement: React.FC = () => {
  const navigate = useNavigate();
  const { floor } = useParams<{ floor: string }>();
  const canvasRef = useRef<CustomFabricCanvas | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(
    null
  );
  const [objectProperties, setObjectProperties] = useState({
    fill: "",
    stroke: "",
    strokeWidth: 1,
    opacity: 1,
  });
  const [isPanMode, setIsPanMode] = useState(false);
  const [selectedCanvas, setSelectedCanvas] = useState(floor);
  const [selectedObjects, setSelectedObjects] = useState<fabric.Object[]>([]);
  const copiedObjectRef = useRef<fabric.Object | null>(null);

  const saveState = (canvas: CustomFabricCanvas) => {
    if (!canvas.state) {
      canvas.state = [];
      canvas.index = -1;
    }

    if (canvas.index !== undefined) {
      canvas.state = canvas.state.slice(0, canvas.index + 1);
      canvas.state.push({
        version: canvas.toJSON().version,
        objects: canvas.toJSON().objects,
        reset: () => {}, // Implement the reset function
        restore: () => {}, // Implement the restore function
        save: () => {},
      });
      canvas.index++;
    }
  };

  const undo = (canvas: CustomFabricCanvas) => {
    if (canvas.index !== undefined && canvas.index! > 0) {
      canvas.index!--;
      canvas.loadFromJSON(canvas.state![canvas.index!], () => {
        canvas.renderAll();
      });
    }
  };

  useEffect(() => {
    navigate(`/roomManagement/${selectedCanvas}`);
    const canvas = new fabric.Canvas("canvas", {
      width: window.innerWidth * 0.92,
      height: window.innerHeight,
    }) as CustomFabricCanvas;
    canvasRef.current = canvas;

    const handleObjectSelected = () => {
      const activeObject = canvas.getActiveObject();
      const activeGroup = canvas.getActiveObjects();
      if (activeObject) {
        setSelectedObject(activeObject);
        setSelectedObjects(activeGroup);
        setObjectProperties({
          fill: activeObject.get("fill") as string,
          stroke: activeObject.get("stroke") as string,
          strokeWidth: activeObject.get("strokeWidth") as number,
          opacity: activeObject.get("opacity") as number,
        });
      }
    };

    canvas.on("selection:created", handleObjectSelected);
    canvas.on("selection:updated", handleObjectSelected);
    canvas.on("selection:cleared", () => {
      setSelectedObject(null);
      setSelectedObjects([]);
      setObjectProperties({
        fill: "",
        stroke: "",
        strokeWidth: 1,
        opacity: 1,
      });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete") {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
          setSelectedObject(null);
          setSelectedObjects([]);
          setObjectProperties({
            fill: "",
            stroke: "",
            strokeWidth: 1,
            opacity: 1,
          });
        }
      }

      // Copy (Ctrl + C)
      if (event.ctrlKey && event.key === "c") {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          activeObject.clone((cloned: fabric.Object) => {
            copiedObjectRef.current = cloned;
          });
        }
      }

      // Paste (Ctrl + V)
      if (event.ctrlKey && event.key === "v") {
        if (copiedObjectRef.current) {
          copiedObjectRef.current.clone((clonedObj: fabric.Object) => {
            canvas.discardActiveObject();
            clonedObj.set({
              left: clonedObj.left! + 10,
              top: clonedObj.top! + 10,
            });
            canvas.add(clonedObj);
            canvas.setActiveObject(clonedObj);
            canvas.requestRenderAll();
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    loadCanvas(selectedCanvas!);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      canvas.dispose();
    };
  }, [selectedCanvas, navigate]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const handleMouseWheel = throttle((opt: fabric.IEvent<WheelEvent>) => {
      if (!isPanMode) return;
      const delta = opt.e.deltaY;
      let zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
      canvas.requestRenderAll();
    }, 50);

    const handleMouseDown = (opt: fabric.IEvent<MouseEvent>) => {
      if (!isPanMode) return;
      canvas.isDragging = true;
      canvas.selection = false;
      canvas.lastPosX = opt.e.clientX;
      canvas.lastPosY = opt.e.clientY;
    };

    const handleMouseMove = (opt: fabric.IEvent<MouseEvent>) => {
      if (!canvas.isDragging) return;
      const e = opt.e;
      const vpt = canvas.viewportTransform!;
      vpt[4] += e.clientX - canvas.lastPosX!;
      vpt[5] += e.clientY - canvas.lastPosY!;
      canvas.requestRenderAll();
      canvas.lastPosX = e.clientX;
      canvas.lastPosY = e.clientY;
    };

    const handleMouseUp = () => {
      canvas.setViewportTransform(canvas.viewportTransform!);
      canvas.isDragging = false;
      canvas.selection = true;
    };

    canvas.on(
      "mouse:wheel",
      handleMouseWheel as (e: fabric.IEvent<Event>) => void
    );
    canvas.on(
      "mouse:down",
      handleMouseDown as (e: fabric.IEvent<Event>) => void
    );
    canvas.on(
      "mouse:move",
      handleMouseMove as (e: fabric.IEvent<Event>) => void
    );
    canvas.on("mouse:up", handleMouseUp as (e: fabric.IEvent<Event>) => void);

    canvas.on("object:added", () => saveState(canvas));
    canvas.on("object:modified", () => saveState(canvas));
    canvas.on("object:removed", () => saveState(canvas));

    return () => {
      canvas.off(
        "mouse:wheel",
        handleMouseWheel as (e: fabric.IEvent<Event>) => void
      );
      canvas.off(
        "mouse:down",
        handleMouseDown as (e: fabric.IEvent<Event>) => void
      );
      canvas.off(
        "mouse:move",
        handleMouseMove as (e: fabric.IEvent<Event>) => void
      );
      canvas.off(
        "mouse:up",
        handleMouseUp as (e: fabric.IEvent<Event>) => void
      );

      canvas.off("object:added", () => saveState(canvas));
      canvas.off("object:modified", () => saveState(canvas));
      canvas.off("object:removed", () => saveState(canvas));
    };
  }, [isPanMode]);

  const togglePanMode = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      setIsPanMode((prevMode) => {
        const newMode = !prevMode;
        canvas.selection = !newMode;
        return newMode;
      });
    }
  };

  const getVisibleCenter = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const viewportTransform = canvas.viewportTransform || [1, 0, 0, 1, 0, 0];
      const zoom = canvas.getZoom();
      const centerX = canvas.width! / 2 / zoom - viewportTransform[4] / zoom;
      const centerY = canvas.height! / 2 / zoom - viewportTransform[5] / zoom;
      return { left: centerX, top: centerY };
    }
    return { left: 100, top: 100 };
  };

  const addRectangle = () => {
    const center = getVisibleCenter();
    const rect = new fabric.Rect({
      ...center,
      fill: "red",
      width: 50,
      height: 50,
      stroke: objectProperties.stroke,
      strokeWidth: objectProperties.strokeWidth,
      opacity: objectProperties.opacity,
    });
    canvasRef.current?.add(rect);
  };

  const addCircle = () => {
    const center = getVisibleCenter();
    const circle = new fabric.Circle({
      ...center,
      radius: 50,
      fill: "green",
      stroke: objectProperties.stroke,
      strokeWidth: objectProperties.strokeWidth,
      opacity: objectProperties.opacity,
    });
    canvasRef.current?.add(circle);
  };

  const addTriangle = () => {
    const center = getVisibleCenter();
    const triangle = new fabric.Triangle({
      ...center,
      width: 50,
      height: 50,
      fill: "blue",
      stroke: objectProperties.stroke,
      strokeWidth: objectProperties.strokeWidth,
      opacity: objectProperties.opacity,
    });
    canvasRef.current?.add(triangle);
  };

  const addText = () => {
    const center = getVisibleCenter();
    const text = new fabric.Textbox("Klik 2x Untuk Mengubah Teks", {
      ...center,
      width: 200,
      fontSize: 20,
      opacity: objectProperties.opacity,
    });
    canvasRef.current?.add(text);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (f) {
        const data = f.target?.result;
        if (data && typeof data === "string") {
          fabric.Image.fromURL(data, (img) => {
            canvasRef.current?.add(img);
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setObjectProperties((prevState) => ({
      ...prevState,
      [name]:
        name === "strokeWidth" || name === "opacity"
          ? parseFloat(value)
          : value,
    }));

    if (selectedObject) {
      if (name === "fill" || name === "stroke" || name === "opacity") {
        selectedObject.set(
          name as keyof typeof selectedObject, // Add type assertion here
          name === "opacity" ? parseFloat(value) : value
        );
      } else {
        selectedObject.set(
          name as keyof typeof selectedObject,
          parseFloat(value)
        );
      }
      canvasRef.current?.renderAll();
    }
  };

  const groupObjects = () => {
    if (!canvasRef.current) return;
    const activeObject = canvasRef.current.getActiveObject();
    if (!activeObject) return;

    if (activeObject.type === "activeSelection") {
      const group = (activeObject as fabric.ActiveSelection).toGroup();
      canvasRef.current.setActiveObject(group);
      canvasRef.current.requestRenderAll();
    }
  };

  const ungroupObjects = () => {
    if (!canvasRef.current) return;
    const activeObject = canvasRef.current.getActiveObject();
    if (!activeObject) return;

    if (activeObject.type === "group") {
      const items = (activeObject as fabric.Group).getObjects();
      const groupLeft = activeObject.left || 0;
      const groupTop = activeObject.top || 0;
      canvasRef.current.remove(activeObject);
      items.forEach((item) => {
        item.left! += groupLeft;
        item.top! += groupTop;
        canvasRef.current!.add(item);
      });
      canvasRef.current.setActiveObject(
        new fabric.ActiveSelection(items, {
          canvas: canvasRef.current,
        })
      );
      canvasRef.current.requestRenderAll();
    }
  };

  const bringForward = () => {
    if (selectedObject) {
      selectedObject.bringForward();
      canvasRef.current?.renderAll();
    }
  };

  const sendBackward = () => {
    if (selectedObject) {
      selectedObject.sendBackwards();
      canvasRef.current?.renderAll();
    }
  };

  const alignLeft = () => {
    if (selectedObjects.length > 1) {
      const minX = Math.min(...selectedObjects.map((obj) => obj.left || 0));
      selectedObjects.forEach((obj) => obj.set({ left: minX }));
      canvasRef.current?.renderAll();
    }
  };

  const alignRight = () => {
    if (selectedObjects.length > 1 && canvasRef.current) {
      const maxX = Math.max(
        ...selectedObjects.map(
          (obj) => (obj.left || 0) + (obj.getBoundingRect().width || 0)
        )
      );
      selectedObjects.forEach((obj) =>
        obj.set({ left: maxX - (obj.getBoundingRect().width || 0) })
      );
      canvasRef.current?.renderAll();
    }
  };

  const alignTop = () => {
    if (selectedObjects.length > 1) {
      const minY = Math.min(...selectedObjects.map((obj) => obj.top || 0));
      selectedObjects.forEach((obj) => obj.set({ top: minY }));
      canvasRef.current?.renderAll();
    }
  };

  const alignBottom = () => {
    if (selectedObjects.length > 1 && canvasRef.current) {
      const maxY = Math.max(
        ...selectedObjects.map(
          (obj) => (obj.top || 0) + (obj.getBoundingRect().height || 0)
        )
      );
      selectedObjects.forEach((obj) =>
        obj.set({ top: maxY - (obj.getBoundingRect().height || 0) })
      );
      canvasRef.current?.renderAll();
    }
  };

  const alignCenterVertical = () => {
    if (selectedObjects.length > 1) {
      const centerY =
        selectedObjects.reduce(
          (sum, obj) =>
            sum + ((obj.top || 0) + (obj.getBoundingRect().height || 0) / 2),
          0
        ) / selectedObjects.length;
      selectedObjects.forEach((obj) =>
        obj.set({ top: centerY - (obj.getBoundingRect().height || 0) / 2 })
      );
      canvasRef.current?.renderAll();
    }
  };

  const alignCenterHorizontal = () => {
    if (selectedObjects.length > 1) {
      const centerX =
        selectedObjects.reduce(
          (sum, obj) =>
            sum + ((obj.left || 0) + (obj.getBoundingRect().width || 0) / 2),
          0
        ) / selectedObjects.length;
      selectedObjects.forEach((obj) =>
        obj.set({ left: centerX - (obj.getBoundingRect().width || 0) / 2 })
      );
      canvasRef.current?.renderAll();
    }
  };

  const saveCanvas = async (canvasName: string) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const objects = canvas.getObjects();
      if (objects.length === 0) return;

      const boundingBox = canvas.getObjects().reduce(
        (bbox, obj) => {
          const objBbox = obj.getBoundingRect();
          return {
            left: Math.min(bbox.left, objBbox.left),
            top: Math.min(bbox.top, objBbox.top),
            right: Math.max(bbox.right, objBbox.left + objBbox.width),
            bottom: Math.max(bbox.bottom, objBbox.top + objBbox.height),
          };
        },
        { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity }
      );

      const width = boundingBox.right - boundingBox.left;
      const height = boundingBox.bottom - boundingBox.top;

      const tempCanvas = new fabric.StaticCanvas(null, {
        width,
        height,
      });

      const background = new fabric.Rect({
        left: 0,
        top: 0,
        width,
        height,
        fill: "#ffffff",
      });
      tempCanvas.add(background);

      for (const obj of objects) {
        await new Promise<void>((resolve) => {
          obj.clone((cloned: fabric.Object) => {
            cloned.set({
              left: (obj.left || 0) - boundingBox.left,
              top: (obj.top || 0) - boundingBox.top,
            });
            tempCanvas.add(cloned);
            resolve();
          });
        });
      }

      tempCanvas.renderAll();
      const imageContent = tempCanvas.toDataURL({
        format: "png",
        quality: 1,
        multiplier: 2,
      });

      const json = canvas.toJSON();

      axios
        .post("http://localhost:3001/api/v1/savespace", {
          fileName: canvasName,
          jsonContent: json,
          imageContent: imageContent,
        })
        .then(() => {
          alert(`${canvasName} saved!`);
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to save file.");
        });
    }
  };

  const loadCanvas = (canvasName: string) => {
    axios
      .get(`http://localhost:3001/api/v1/loadspace/${canvasName}`)
      .then((response) => {
        if (canvasRef.current) {
          canvasRef.current.loadFromJSON(response.data, () => {
            canvasRef.current?.renderAll();
            alert(`${canvasName} loaded!`);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to load file.");
      });
  };

  const setTextStyle = (style: keyof fabric.Textbox) => {
    if (selectedObject && selectedObject instanceof fabric.Textbox) {
      if (style === "fontWeight") {
        selectedObject.set(
          "fontWeight",
          selectedObject.fontWeight === "bold" ? "normal" : "bold"
        );
      } else if (style === "fontStyle") {
        selectedObject.set(
          "fontStyle",
          selectedObject.fontStyle === "italic" ? "normal" : "italic"
        );
      } else if (style === "underline") {
        selectedObject.set("underline", !selectedObject.underline);
      }
      canvasRef.current?.renderAll();
    }
  };

  const handleTextPropertyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (selectedObject && selectedObject instanceof fabric.Textbox) {
      selectedObject.set(name as keyof fabric.Textbox, value);
      canvasRef.current?.renderAll();
    }
  };

  return (
    <div
      className={styles.containerRm}
      style={{
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
      }}
    >
      <div className={styles.detailObject}>
        {selectedObject && (
          <div className={styles.properties}>
            <div className={styles.propertiesLabel}>
              <label className="mohave--medium">Color:</label>
              <input
                type="color"
                name="fill"
                value={objectProperties.fill}
                onChange={handlePropertyChange}
                className={styles.color}
              />
              <label className="mohave--medium">Opacity:</label>
              <input
                type="number"
                name="opacity"
                value={objectProperties.opacity}
                onChange={handlePropertyChange}
                className={styles.number}
                step="0.1"
                min="0"
                max="1"
              />
            </div>
            {(selectedObject.type === "rect" ||
              selectedObject.type === "circle" ||
              selectedObject.type === "triangle") && (
              <>
                <div className={styles.propertiesLabel}>
                  <label className="mohave--medium">Border Color:</label>
                  <input
                    type="color"
                    name="stroke"
                    value={objectProperties.stroke}
                    onChange={handlePropertyChange}
                    className={styles.color}
                  />
                </div>
                <div className={styles.propertiesLabel}>
                  <label className="mohave--medium">Border Width:</label>
                  <input
                    type="number"
                    name="strokeWidth"
                    value={objectProperties.strokeWidth}
                    onChange={handlePropertyChange}
                    className={styles.number}
                    step="0.1"
                  />
                </div>
              </>
            )}
            {selectedObject &&
              selectedObjects.length === 1 &&
              selectedObject instanceof fabric.Textbox && (
                <>
                  <button onClick={() => setTextStyle("fontWeight")}>
                    Bold
                  </button>
                  <button onClick={() => setTextStyle("fontStyle")}>
                    Italic
                  </button>
                  <button onClick={() => setTextStyle("underline")}>
                    Underline
                  </button>
                  <div className={styles.propertiesLabel}>
                    <label className="mohave--medium">Background Color:</label>
                    <input
                      type="color"
                      name="backgroundColor"
                      value={selectedObject.backgroundColor || ""}
                      onChange={handleTextPropertyChange}
                      className={styles.color}
                    />
                  </div>
                </>
              )}
            <button onClick={groupObjects}>Group</button>
            <button onClick={ungroupObjects}>Ungroup</button>
            <button onClick={bringForward}>Bring Forward</button>
            <button onClick={sendBackward}>Send Backward</button>
            {selectedObjects.length > 1 && (
              <>
                <button onClick={alignLeft}>Align Left</button>
                <button onClick={alignRight}>Align Right</button>
                <button onClick={alignTop}>Align Top</button>
                <button onClick={alignBottom}>Align Bottom</button>
                <button onClick={alignCenterVertical}>
                  Align Center Vertical
                </button>
                <button onClick={alignCenterHorizontal}>
                  Align Center Horizontal
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <div className={styles.playground}>
        <div className={styles.containerButton}>
          <div
            onClick={togglePanMode}
            className={styles.handButton}
            id="rmHand"
          >
            <Tooltip
              anchorSelect="#rmHand"
              content="Mode Pan"
              style={{ fontSize: "2rem" }}
            />
            <HandSvg color={isPanMode ? "#ffff00" : "#fff"} />
          </div>
          <div className={styles.actionButton}>
            <img
              src={rect}
              alt="rect"
              onClick={addRectangle}
              className="rect"
            />
            <Tooltip
              anchorSelect=".rect"
              content="Masukkan Objek Persegi"
              style={{ fontSize: "2rem" }}
            />
            <img
              src={circle}
              alt="circle"
              onClick={addCircle}
              className="circ"
            />
            <Tooltip
              anchorSelect=".circ"
              content="Masukkan Objek Lingkaran"
              style={{ fontSize: "2rem" }}
            />
            <img
              src={triangle}
              alt="triangle"
              onClick={addTriangle}
              className="tri"
            />
            <Tooltip
              anchorSelect=".tri"
              content="Masukkan Objek Segitiga"
              style={{ fontSize: "2rem" }}
            />
            <img src={text} alt="text" onClick={addText} className="tex" />
            <Tooltip
              anchorSelect=".tex"
              content="Masukkan Text"
              style={{ fontSize: "2rem" }}
            />
            <label htmlFor="upload" className={styles.uploadLabel}>
              <img src={uploadIcon} alt="upload" className="upl" />
              <Tooltip
                anchorSelect=".upl"
                content="Masukkan Gambar"
                style={{ fontSize: "2rem" }}
              />
              <input
                id="upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleUpload}
              />
            </label>
          </div>
          <div className={styles.actionButton}>
            <select
              id="canvas-select"
              value={selectedCanvas}
              onChange={(e) => setSelectedCanvas(e.target.value)}
              className={styles.selectionLantai}
            >
              <option value="lantai1">Lantai 1</option>
              <option value="lantai2">Lantai 2</option>
              <option value="lantai3">Lantai 3</option>
              <option value="lantai4">Lantai 4</option>
            </select>
          </div>
          <div className={styles.otherButton}>
            <div className={styles.saveButton}>
              <img
                src={undoImg}
                alt="undo"
                onClick={() => undo(canvasRef.current!)}
                className="und"
              />
              <Tooltip
                anchorSelect=".und"
                content="undo"
                style={{ fontSize: "2rem" }}
              />
              <img
                src={save}
                alt="save"
                onClick={() => saveCanvas(selectedCanvas!)}
                className="sav"
              />
              <Tooltip
                anchorSelect=".sav"
                content="simpan"
                style={{ fontSize: "2rem" }}
              />
            </div>

            <div
              className={styles.offButton}
              onClick={() => navigate(`/main/assets/space/${floor}`)}
              style={{ borderColor: "red" }}
              id="closeOff"
            >
              <img src={off} alt="off" />
              <Tooltip
                anchorSelect="#closeOff"
                content="tutup"
                style={{ fontSize: "2rem" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.containerDrawing}>
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
