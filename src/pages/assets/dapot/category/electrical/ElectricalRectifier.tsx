import { useEffect, useReducer, useState } from "react";
import {
  deleteRectifier,
  getRectifiers,
} from "@/services/electrical/dapotRectifiers";
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
  initialStateListRecti,
  listRectiReducer,
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

interface Rectifier {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  role: string;
  type: string;
  capacity: number;
  modul: string;
  capacity_modul: number;
  load_current: number;
  occupancy: number;
  system_device: string;
  remark_aging: string;
  warranty: string | null;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

export default function ElectricalRectifier() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(listRectiReducer, initialStateListRecti);
  const {
    rectifiers,
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
        const data = await getRectifiers(page, dispatch, globalFilter, nopage);
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_RECTIFIERS", payload: data.data });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch rectifiers",
        });
      }
    };

    fetchRectifiers();
  }, [searchParams, globalFilter]);

  const columns: ColumnDef<Rectifier>[] = positionColumn
    ? [
        {
          accessorKey: "id",
          header: "Rectifier Id",
          cell: ({ row }) => (
            <Link
              to={`/main/assets/datapotensi/detail/electrical/rectifier?id=${row.original.id}`}
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
        { accessorKey: "role", header: "Role" },
        {
          accessorKey: "capacity",
          header: "Capacity",
          cell: (info) => `${info.getValue()} A`,
        },
        { accessorKey: "modul", header: "Modul" },
        {
          accessorKey: "capacity_modul",
          header: "Modul Capacity",
          cell: (info) => `${info.getValue()} A`,
        },
        { accessorKey: "load_current", header: "Load Current" },
        {
          accessorKey: "occupancy",
          header: "Occupancy",
          cell: (info) => `${info.getValue() ? info.getValue() : 0}%`,
        },
        {
          accessorKey: "system_device",
          header: "System",
          cell: (info) => `${info.getValue()} System`,
        },
        { accessorKey: "installation_date", header: "Installation Date" },
        { accessorKey: "maintenance_date", header: "Maintenance Date" },
        { accessorKey: "remark_aging", header: "Remark Aging" },
        { accessorKey: "warranty", header: "Garansi" },
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
                    `/main/assets/datapotensi/category/update/electrical/rectifier?id=${row.original.id}`
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
          header: "Rectifier Id",
          cell: ({ row }) => (
            <Link
              to={`/main/assets/datapotensi/detail/electrical/rectifier?id=${row.original.id}`}
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
        { accessorKey: "role", header: "Role" },
        {
          accessorKey: "capacity",
          header: "Capacity",
          cell: (info) => `${info.getValue()} A`,
        },
        { accessorKey: "modul", header: "Modul" },
        {
          accessorKey: "capacity_modul",
          header: "Modul Capacity",
          cell: (info) => `${info.getValue()} A`,
        },
        { accessorKey: "load_current", header: "Load Current" },
        {
          accessorKey: "occupancy",
          header: "Occupancy",
          cell: (info) => `${info.getValue() ? info.getValue() : 0}%`,
        },
        {
          accessorKey: "system_device",
          header: "System",
          cell: (info) => `${info.getValue()} System`,
        },
        { accessorKey: "installation_date", header: "Installation Date" },
        { accessorKey: "maintenance_date", header: "Maintenance Date" },
        { accessorKey: "remark_aging", header: "Remark Aging" },
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
                    `/main/assets/datapotensi/category/update/electrical/rectifier?id=${row.original.id}`
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
    data: rectifiers,
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
    const data = await deleteRectifier(dispatch, id, assetId);
    if (data.success) {
      navigate(0);
    }
  };

  const renderPagination = () => {
    if (!pagination) return null;

    const { totalPages, currentPage } = pagination;
    const maxPagesToShow = 3;
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= maxPagesToShow) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage > totalPages - maxPagesToShow) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return (
      <div
        className={styles.paginationContainer}
        {...{
          style: {
            width: positionColumn && table.getCenterTotalSize() / 1.5,
          },
        }}
      >
        <button onClick={() => pageHandle(1)} disabled={currentPage === 1}>
          «
        </button>
        <button
          onClick={() => pageHandle(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className={styles.paginationEllipsis}>
              {page}
            </span>
          ) : (
            <p
              key={index}
              style={{
                color: currentPage === page ? "#fcd100" : "#333",
              }}
              onClick={() => pageHandle(page as number)}
            >
              {page}
            </p>
          )
        )}
        <button
          onClick={() => pageHandle(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
        <button
          onClick={() => pageHandle(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPageDapot
            title={`List Rectifier`}
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
            title={`List Rectifier`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="electrical"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
          />
          <div className={styles.tableWrapper}>
            <DapotButtonsCategory
              listpages={electricalListButtons}
              subCategory="electrical"
            />
            {rectifiers.length > 0 ? (
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
                                  row.index === rectifiers.length - 1 &&
                                  ind === 0
                                    ? "10px"
                                    : undefined,
                                borderBottomRightRadius:
                                  row.index === rectifiers.length - 1 &&
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
                {renderPagination()}
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
