import { useState, useEffect } from "react";
import styles from "@/css/module/Power.module.css";
import useMonitoringSystem from "@/hooks/useMonitoringSystem";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";
import MonitoringDown from "@/components/error/MonitoringDown";
import LoadingPage from "@/components/loading/LoadingPage";
import TrendGrafic from "@/components/grafic/TendGrafic";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";

type GrafikBbm = {
  date: Date;
  value: number;
};

type TableBbm = {
  date: Date;
  volume: number;
  level: number;
  name: string;
};

function Bbm() {
  const [updateData, setUpdateData] = useState<any>();
  const [dataActive, setDataActive] = useState("volume");
  const [_, setGraphToolTip] = useState<{ timestamp: string; value: number }>({
    timestamp: "",
    value: 0,
  });

  const [tableBbm, setTableBbm] = useState<
    | {
        tangkibulanana: TableBbm[];
        tangkibulananb: TableBbm[];
        tangkihariana: TableBbm[];
        tangkiharianb: TableBbm[];
        tangkicadangan: TableBbm[];
      }
    | undefined
  >();
  const [grafBbm, setGrafBbm] = useState<
    | {
        tangkibulanana: GrafikBbm[];
        tangkibulananb: GrafikBbm[];
        tangkihariana: GrafikBbm[];
        tangkiharianb: GrafikBbm[];
        tangkicadangan: GrafikBbm[];
      }
    | undefined
  >();

  // untuk table
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [showModal, setShowModal] = useState(false);

  const nowUTC8 = moment().tz("Asia/Singapore"); // Waktu sekarang di UTC+8
  const initialEndDate = nowUTC8.toDate(); // Mengonversi ke objek Date
  const initialStartDate = nowUTC8.subtract(24, "hours").toDate();
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate);

  const { data, loading, error } = useMonitoringSystem(
    "http://192.168.1.62:2012/api/v1/monitoring/bbm"
  );

  // Handle click to set active class
  const showTableHandler = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // Toggle active state
  };

  useEffect(() => {
    setDataActive("volume");
    console.log(data);
    const lasttValueArrPower: any = (arr: any) => {
      return arr[arr.length - 1];
    };

    const returnTable = (arr: any, name: any) => {
      return arr.map((item: any) => {
        return {
          date: moment(item.timestamp as string)
            .tz("Asia/Singapore")
            .format("YYYY-MM-DD HH:mm:ss"),
          name:
            name === "tangkibulanana"
              ? "Tangki Bulanan A"
              : name === "tangkibulananb"
              ? "Tangki Bulanan B"
              : name === "tangkihariana"
              ? "Tangki Harian A"
              : name === "tangkiharianb"
              ? "Tangki Harian B"
              : "Tangki Cadangan",
          volume: Number(item[`${name}`].volume),
          level: Number(item[`${name}`].level),
        };
      });
    };

    const returnGraph = (arr: any, name: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item[`${name}`].volume),
      }));
    };

    if (data.data) {
      if (data.data.length > 0) {
        setUpdateData(lasttValueArrPower(data.data));
        setGrafBbm((obj) => {
          return {
            ...obj,
            tangkibulanana: returnGraph(data.data, "tangkibulanana"),
            tangkibulananb: returnGraph(data.data, "tangkibulananb"),
            tangkihariana: returnGraph(data.data, "tangkihariana"),
            tangkiharianb: returnGraph(data.data, "tangkiharianb"),
            tangkicadangan: returnGraph(data.data, "tangkicadangan"),
          };
        });
        setTableBbm((obj) => {
          return {
            ...obj,
            tangkibulanana: returnTable(data.data, "tangkibulanana"),
            tangkibulananb: returnTable(data.data, "tangkibulananb"),
            tangkihariana: returnTable(data.data, "tangkihariana"),
            tangkiharianb: returnTable(data.data, "tangkiharianb"),
            tangkicadangan: returnTable(data.data, "tangkicadangan"),
          };
        });
      }
    }
  }, [data]);

  useEffect(() => {
    const returnGraph = (arr: any, name: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value:
          dataActive === "volume"
            ? Number(item[`${name}`].volume)
            : Number(item[`${name}`].level),
      }));
    };
    if (data.data) {
      if (data.data.length > 0) {
        setGrafBbm((obj) => {
          return {
            ...obj,
            tangkibulanana: returnGraph(data.data, "tangkibulanana"),
            tangkibulananb: returnGraph(data.data, "tangkibulananb"),
            tangkihariana: returnGraph(data.data, "tangkihariana"),
            tangkiharianb: returnGraph(data.data, "tangkiharianb"),
            tangkicadangan: returnGraph(data.data, "tangkicadangan"),
          };
        });
      }
    }
  }, [dataActive]);

  const columns: ColumnDef<TableBbm | undefined>[] = [
    { accessorKey: "name", header: "Nama Ruangan" },
    { accessorKey: "date", header: "Waktu Pengambilan Data" },
    {
      accessorKey: "volume",
      header: "Volume (Liter)",
      cell: ({ row }) => (
        <p style={{ fontSize: "1.8rem" }}>
          {row.original?.volume ? row.original.volume : 0} Liter
        </p>
      ),
    },
    {
      accessorKey: "level",
      header: "level (CM)",
      cell: ({ row }) => (
        <p style={{ fontSize: "1.8rem" }}>
          {row.original?.level ? row.original.level : 0} CM
        </p>
      ),
    },
  ];
  const table = useReactTable({
    data:
      activeIndex === 1
        ? tableBbm?.tangkibulanana?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 2
        ? tableBbm?.tangkibulananb?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 3
        ? tableBbm?.tangkihariana?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 4
        ? tableBbm?.tangkiharianb?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : tableBbm?.tangkicadangan?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? [],
    columns,
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    pageCount: 0,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <>
        <HeadPageMonitoring title="Bbm System Monitoring - TTC Pengayoman" />
        <MonitoringDown />
      </>
    );

  return (
    <>
      <HeadPageMonitoring title="Bbm System Monitoring - TTC Pengayoman" />
      {activeIndex ? (
        <div className={styles.buttonDataActiveGroup}>
          <div
            className={styles.buttonDataActive}
            onClick={() => setShowModal(true)}
          >
            Export .xlsx
          </div>
        </div>
      ) : (
        <div className={styles.buttonDataActiveGroup}>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "volume" ? styles.active : ""
            }`}
            onClick={() => setDataActive("volume")}
          >
            Volume
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "level" ? styles.active : ""
            }`}
            onClick={() => setDataActive("level")}
          >
            Level
          </div>
        </div>
      )}
      <div className={styles.sectionWrapper}>
        {activeIndex && (
          <div className={styles.sectionTable}>
            {updateData && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2 style={{ fontSize: "2rem" }}>
                  {activeIndex === 1
                    ? `Table Data ${updateData.tangkibulanana.name} by System`
                    : activeIndex === 2
                    ? `Table Data ${updateData.tangkibulananb.name} by System`
                    : activeIndex === 3
                    ? `Table Data ${updateData.tangkihariana.name} by System`
                    : activeIndex === 4
                    ? `Table Data ${updateData.tangkiharianb.name} by System`
                    : `Table Data ${updateData.tangkicadangan.name} by System`}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <h2 style={{ fontSize: "2rem" }}>
                    {activeIndex === 1
                      ? `Nilai Sekarang ${updateData.tangkibulanana.value}`
                      : activeIndex === 2
                      ? `Nilai Sekarang ${updateData.tangkibulananb.value}`
                      : activeIndex === 3
                      ? `Nilai Sekarang ${updateData.tangkihariana.value}`
                      : activeIndex === 4
                      ? `Nilai Sekarang ${updateData.tangkiharianb.value}`
                      : `Nilai Sekarang ${updateData.tangkicadangan.value}`}
                  </h2>
                </div>
              </div>
            )}
            <div className={styles.tableSeal}>
              <div className={styles.tableWrapper}>
                <div className={styles.tableDetail}>
                  <table className={styles.assetTable}>
                    <thead>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <th
                                key={header.id}
                                className={`${styles.sticky} ${styles.stickyHeader}`}
                                colSpan={header.colSpan}
                                style={{
                                  width:
                                    header.getSize() !== 150
                                      ? header.getSize()
                                      : "auto",
                                }}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                <div
                                  {...{
                                    onDoubleClick: () =>
                                      header.column.resetSize(),
                                    onMouseDown: header.getResizeHandler(),
                                    onTouchStart: header.getResizeHandler(),
                                    className: `resizer ${
                                      table.options.columnResizeDirection
                                    } ${
                                      header.column.getIsResizing()
                                        ? "isResizing"
                                        : ""
                                    }`,
                                  }}
                                />
                              </th>
                            );
                          })}
                        </tr>
                      ))}
                    </thead>
                    <tbody>
                      {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td
                                key={cell.id}
                                style={{
                                  background:
                                    row.index % 2 !== 0 ? "#ffd1d1" : "",
                                }}
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.sectionGraph}>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 1 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(1)}
          >
            {grafBbm?.tangkibulanana && (
              <TrendGrafic
                data={grafBbm?.tangkibulanana}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableBbm?.tangkibulanana[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={180}
                setValue={setGraphToolTip}
                backgroundColor="#fff"
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 2 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(2)}
          >
            {grafBbm?.tangkibulananb && (
              <TrendGrafic
                data={grafBbm?.tangkibulananb}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableBbm?.tangkibulananb[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={180}
                setValue={setGraphToolTip}
                backgroundColor="#fff"
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 3 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(3)}
          >
            {grafBbm?.tangkihariana && (
              <TrendGrafic
                data={grafBbm?.tangkihariana}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableBbm?.tangkihariana[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={180}
                setValue={setGraphToolTip}
                backgroundColor="#fff"
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 4 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(4)}
          >
            {grafBbm?.tangkiharianb && (
              <TrendGrafic
                data={grafBbm?.tangkiharianb}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableBbm?.tangkiharianb[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={180}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 5 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(5)}
          >
            {grafBbm?.tangkicadangan && (
              <TrendGrafic
                data={grafBbm?.tangkicadangan}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableBbm?.tangkicadangan[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={180}
                setValue={setGraphToolTip}
                backgroundColor="#fff"
                stroke="#000"
              />
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.blackLight}>
          <div className={styles.modalExport}>
            <h2 style={{ fontSize: "2rem", color: "#fff" }}>Export Data</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "6rem",
              }}
            >
              <div className={styles.containerInput}>
                <p className={styles.textTitleInput}>Mulai Tanggal</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className={styles.inputDate}
                  maxDate={endDate || undefined}
                />
              </div>
              <div className={styles.containerInput}>
                <p className={styles.textTitleInput}>Akhir Tanggal</p>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className={styles.inputDate}
                  minDate={startDate || undefined}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "6rem",
              }}
            >
              <div
                className={styles.buttonExport}
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "#dbcf4b",
                  color: "#000",
                }}
              >
                Close
              </div>
              <div
                className={styles.buttonExport}
                // onClick={() =>
                //   downloadExcelFileThermal(startDate as Date, endDate as Date)
                // }
              >
                Export All Data
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Bbm;
