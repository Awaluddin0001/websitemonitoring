import { useReducer, useEffect } from "react";
import styles from "@/css/module/Asset.module.css";
import HeadPageDapot from "@/components/header/HeadPageDapot";
import {
  initialStateElectricalAllList,
  updateElectricalAllReducer,
} from "src/reducers/electricalReducer";
import { useSearchParams, Link } from "react-router-dom";
import { getElectricals } from "@/services/electrical/dapotElectrical";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import DapotButtonsCategory from "@/components/dapotFilter/DapotButtonsCategory";
import { electricalListButtons } from "@/routes/dapotCategory";

interface Electrical {
  id: string;
  ne_id: string;
  site_id: string;
  site_name: string;
  floor_name: string;
  floor_id: string;
  room_name: string;
  room_id: string;
  device_id: string;
  sub_category_id: string;
  sub_category_name: string;
  link_id: string;
  status: string;
  condition_asset: string;
  notes: string;
  installation_date: string;
  maintenance_id: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export default function ElectricalAll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateElectricalAllReducer,
    initialStateElectricalAllList
  );
  const {
    electricals,
    pagination,
    isLoading,
    isError,
    globalFilter,
    positionColumn,
    exportToggle,
  } = state;

  useEffect(() => {
    const fetchElectricals = async () => {
      try {
        const page = searchParams.get("page") || "1";
        const nopage = globalFilter ? "no" : undefined;
        const data = await getElectricals(page, dispatch, globalFilter, nopage);
        console.log(data.data);
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_ELECTRICALS", payload: data.data });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch rectifiers",
        });
      }
    };

    fetchElectricals();
  }, [searchParams, globalFilter]);

  const columns: ColumnDef<Electrical>[] = [
    { accessorKey: "asset_id", header: "Electrical ID" },
    { accessorKey: "ne_id", header: "NE ID" },
    { accessorKey: "site_name", header: "Site" },
    { accessorKey: "floor_name", header: "Lantai" },
    { accessorKey: "room_name", header: "Ruangan" },
    {
      accessorKey: "device_id",
      header: "Device ID",
      cell: ({ row }) => (
        <Link
          to={`/main/assets/datapotensi/detail/electrical/rectifier?id=${row.original.device_id}`}
          style={{
            color: "#000",
            fontSize: "1.8rem",
          }}
        >
          {row.original.device_id}
        </Link>
      ),
    },
    { accessorKey: "type_name", header: "Category" },
    { accessorKey: "condition_asset", header: "Kondisi" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "maintenance_id", header: "Maintenance ID" },
    { accessorKey: "link_id", header: "Link ID" },
    { accessorKey: "notes", header: "Keterangan" },
    { accessorKey: "installation_date", header: "Tanggal Instalasi" },
    { accessorKey: "created_at", header: "Last Update" },
    { accessorKey: "user_name", header: "Update By" },
  ];

  const table = useReactTable({
    data: electricals,
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
      <div className={styles.paginationContainer}>
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
            title={`List Semua Electrical`}
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
            {electricals.length > 0 ? (
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
                        {row.getVisibleCells().map((cell, ind) => {
                          return (
                            <td
                              key={cell.id}
                              style={{
                                background:
                                  row.index % 2 !== 0 ? "#ffd1d1" : "",
                                borderBottomLeftRadius:
                                  row.index === electricals.length - 1 &&
                                  ind === 0
                                    ? "10px"
                                    : undefined,
                                borderBottomRightRadius:
                                  row.index === electricals.length - 1 &&
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
        </>
      )}
    </>
  );
}
