import { useEffect, useReducer, useState } from "react";
import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import DapotButtonsCategory from "@/components/dapotFilter/DapotButtonsCategory";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateListLvmdp,
  listLvmdpReducer,
} from "src/reducers/electricalReducer";
import HeadPageDapot from "@/components/header/HeadPageDapot";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  getFilteredRowModel,
} from "@tanstack/react-table";
import HomeModal from "@/components/modal/HomeModal";
import { electricalListButtons } from "@/routes/dapotCategory";
import { Lvmdp } from "@/types/electricalTypes";
import {
  deleteLvmdp,
  exportLvmdpsCsv,
  exportLvmdpsXlsx,
  getLvmdps,
} from "@/services/electrical/dapotLvmdp";
import { renderPagination } from "@/components/table/RenderPagination";

export default function ElectricalLvmdp() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(listLvmdpReducer, initialStateListLvmdp);
  const {
    lvmdps,
    pagination,
    isLoading,
    isError,
    globalFilter,
    positionColumn,
    exportToggle,
  } = state;
  const [isShowModal, setIsShowModal] = useState(false);
  const [idOriginal, setIdOriginal] = useState("");
  const [assetIdOriginal, setAssetIdOriginal] = useState("");

  useEffect(() => {
    const fetchRectifiers = async () => {
      try {
        const page = searchParams.get("page") || "1";
        const nopage = globalFilter ? "no" : undefined;
        const data = await getLvmdps(page, dispatch, globalFilter, nopage);
        console.log(data);
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_LVMDPS", payload: data.data });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch lvmdps",
        });
      }
    };

    fetchRectifiers();
  }, [searchParams, globalFilter]);

  const columns: ColumnDef<Lvmdp>[] = positionColumn
    ? [
        {
          accessorKey: "id",
          header: "LVMDP Id",
          cell: ({ row }) => (
            <Link
              to={`/main/assets/datapotensi/detail/electrical/lvmdp?id=${row.original.id}`}
              style={{
                color: "#000",
                fontSize: "1.8rem",
              }}
            >
              {row.original.id}
            </Link>
          ),
        },
        { accessorKey: "ne_id", header: "NE ID" },
        { accessorKey: "site_name", header: "Site" },
        { accessorKey: "floor_name", header: "Lantai" },
        { accessorKey: "room_name", header: "Ruangan" },
        { accessorKey: "vendor_name", header: "Vendor" },
        { accessorKey: "brand_name", header: "Brand" },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "type_name", header: "Type" },
        { accessorKey: "voltage_level", header: "Voltage Level" },
        { accessorKey: "current_rating", header: "Current Rating" },
        { accessorKey: "breaker_type", header: "Breaker Type" },
        { accessorKey: "breaker_rating", header: "Breaker Rating" },
        { accessorKey: "section", header: "Section" },
        { accessorKey: "installation_date", header: "Installation Date" },
        { accessorKey: "maintenance_date", header: "Maintenance Date" },
        { accessorKey: "incoming", header: "Incoming" },
        { accessorKey: "outgoing", header: "Outgoing" },
        { accessorKey: "condition_asset", header: "Kondisi" },
        { accessorKey: "status", header: "Status" },
        { accessorKey: "notes", header: "Keterangan" },
        { accessorKey: "created_at", header: "Last Update" },
        { accessorKey: "user_name", header: "Update By" },
        {
          id: "actions",
          header: "Action",
          cell: ({ row }) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "6px",
              }}
            >
              <div
                className={styles.btnEdit}
                onClick={() =>
                  navigate(
                    `/main/assets/datapotensi/category/update/electrical/lvmdp?id=${row.original.id}`
                  )
                }
              >
                <img src={Pen} alt="Edit" />
              </div>
              <div
                className={styles.btnDelete}
                onClick={() => {
                  setIdOriginal(row.original.id);
                  setAssetIdOriginal(row.original.asset_id);
                  setIsShowModal(true);
                }}
              >
                <img src={Trash} alt="Delete" />
              </div>
            </div>
          ),
        },
      ]
    : [
        {
          accessorKey: "id",
          header: "LVMDP Id",
          cell: ({ row }) => (
            <Link
              to={`/main/assets/datapotensi/detail/electrical/lvmdp?id=${row.original.id}`}
              style={{
                color: "#000",
                fontSize: "1.8rem",
              }}
            >
              {row.original.id}
            </Link>
          ),
        },
        { accessorKey: "vendor_name", header: "Vendor" },
        { accessorKey: "brand_name", header: "Brand" },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "type_name", header: "Type" },
        { accessorKey: "voltage_level", header: "Voltage Level" },
        { accessorKey: "current_rating", header: "Current Rating" },
        { accessorKey: "breaker_type", header: "Breaker Type" },
        { accessorKey: "breaker_rating", header: "Breaker Rating" },
        { accessorKey: "section", header: "Section" },
        { accessorKey: "installation_date", header: "Installation Date" },
        { accessorKey: "maintenance_date", header: "Maintenance Date" },
        { accessorKey: "created_at", header: "Last Update" },
        { accessorKey: "user_name", header: "Update By" },
        {
          id: "actions",
          header: "Action",
          cell: ({ row }) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "6px",
              }}
            >
              <div
                className={styles.btnEdit}
                onClick={() =>
                  navigate(
                    `/main/assets/datapotensi/category/update/electrical/lvmdp?id=${row.original.id}`
                  )
                }
              >
                <img src={Pen} alt="Edit" />
              </div>
              <div
                className={styles.btnDelete}
                onClick={() => {
                  setIdOriginal(row.original.id);
                  setAssetIdOriginal(row.original.asset_id);
                  setIsShowModal(true);
                }}
              >
                <img src={Trash} alt="Delete" />
              </div>
            </div>
          ),
        },
      ];

  const table = useReactTable({
    data: lvmdps,
    columns,
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    pageCount: pagination ? pagination.totalPages : 1,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: (e) =>
      dispatch({
        type: "SET_GLOBAL_FILTER",
        payload: e.target.value,
      }),
    state: { globalFilter },
  });

  const pageHandle = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  const deleteHandle = async (id: string, assetId: string) => {
    const data = await deleteLvmdp(dispatch, id, assetId);
    if (data.success) {
      navigate(0);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPageDapot
            title={`List Lvmdp`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="electrical"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
          />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPageDapot
            title={`List Lvmdp`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="electrical"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
            exportCsv={exportLvmdpsCsv}
            exportXlsx={exportLvmdpsXlsx}
          />
          <div className={styles.tableWrapper}>
            <DapotButtonsCategory
              listpages={electricalListButtons}
              subCategory="electrical"
            />
            {lvmdps.length > 0 ? (
              <div className={styles.tableDetail}>
                <table
                  className={styles.assetTable}
                  {...{
                    style: {
                      width: positionColumn && table.getCenterTotalSize() / 1.5,
                    },
                  }}
                >
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
                        {row.getVisibleCells().map((cell, ind) => {
                          return (
                            <td
                              key={cell.id}
                              style={{
                                background:
                                  row.index % 2 !== 0 ? "#ffd1d1" : "",
                                borderBottomLeftRadius:
                                  row.index === lvmdps.length - 1 && ind === 0
                                    ? "10px"
                                    : undefined,
                                borderBottomRightRadius:
                                  row.index === lvmdps.length - 1 &&
                                  ind === row.getVisibleCells().length - 1
                                    ? "10px"
                                    : undefined,
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
                {renderPagination(pagination, pageHandle, styles)}
              </div>
            ) : (
              <div className={styles.noData}>
                <Lottie
                  animationData={noData}
                  loop={true}
                  style={{ height: "590px" }}
                />
                <p>Belum Ada Data Yang Tersedia</p>
              </div>
            )}
          </div>
          <HomeModal display={isShowModal} action={setIsShowModal}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h4 style={{ textAlign: "center", fontSize: "4rem" }}>
                Apakah Anda Yakin
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    backgroundColor: "#0ECBC0",
                    width: "100px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                  onClick={() => deleteHandle(idOriginal, assetIdOriginal)}
                >
                  Ya
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    backgroundColor: "#8b0000",
                    width: "100px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                  onClick={() => setIsShowModal(false)}
                >
                  Tidak
                </div>
              </div>
            </div>
          </HomeModal>
        </>
      )}
    </>
  );
}
