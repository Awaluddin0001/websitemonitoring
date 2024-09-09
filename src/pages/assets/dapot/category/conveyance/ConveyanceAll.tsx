import { useReducer, useEffect } from "react";
import styles from "@/css/module/Asset.module.css";
import HeadPageDapot from "@/components/header/HeadPageDapot";
import {
  initialStateConveyanceAllList,
  updateConveyanceAllReducer,
} from "src/reducers/conveyanceReducer";
import { useSearchParams, Link } from "react-router-dom";
import { getConveyances } from "@/services/conveyance/dapotConveyance";
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
import { conveyanceListButtons } from "@/routes/dapotCategory";
import { renderPagination } from "@/components/table/RenderPagination";
import { Conveyance } from "@/types/conveyanceTypes";

export default function ConveyanceAll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateConveyanceAllReducer,
    initialStateConveyanceAllList
  );
  const {
    conveyances,
    pagination,
    isLoading,
    isError,
    globalFilter,
    positionColumn,
    exportToggle,
  } = state;

  useEffect(() => {
    const fetchConveyances = async () => {
      try {
        const page = searchParams.get("page") || "1";
        const nopage = globalFilter ? "no" : undefined;
        const data = await getConveyances(page, dispatch, globalFilter, nopage);
        console.log(data.data);
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_CONVEYANCES", payload: data.data });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch conveyances",
        });
      }
    };

    fetchConveyances();
  }, [searchParams, globalFilter]);

  const columns: ColumnDef<Conveyance>[] = [
    { accessorKey: "asset_id", header: "Conveyance ID" },
    { accessorKey: "ne_id", header: "NE ID" },
    { accessorKey: "site_name", header: "Site" },
    { accessorKey: "floor_name", header: "Lantai" },
    { accessorKey: "room_name", header: "Ruangan" },
    {
      accessorKey: "device_id",
      header: "Device ID",
      cell: ({ row }) => (
        <Link
          to={`/main/assets/datapotensi/detail/conveyance/${
            row.original.type_name.slice(0, 1).toLocaleLowerCase() +
            row.original.type_name.slice(1)
          }?id=${row.original.device_id}`}
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
    data: conveyances,
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
  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPageDapot
            title={`List Semua Conveyance`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="conveyance"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
          />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPageDapot
            title={`List Semua Conveyance`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="conveyance"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
          />
          <div className={styles.tableSeal}>
            <div className={styles.tableWrapper}>
              <DapotButtonsCategory
                listpages={conveyanceListButtons}
                subCategory="conveyance"
              />
              {conveyances.length > 0 ? (
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
                                    row.index === conveyances.length - 1 &&
                                    ind === 0
                                      ? "10px"
                                      : undefined,
                                  borderBottomRightRadius:
                                    row.index === conveyances.length - 1 &&
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
          </div>
          {renderPagination(pagination, pageHandle, styles)}
        </>
      )}
    </>
  );
}
