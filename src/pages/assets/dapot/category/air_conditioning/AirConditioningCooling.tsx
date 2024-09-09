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
import { airListButtons } from "@/routes/dapotCategory";
import { renderPagination } from "@/components/table/RenderPagination";
import {
  initialStateListCoolingDevice,
  listCoolingDeviceReducer,
} from "src/reducers/airConditioningReducer";
import { CoolingDevice } from "@/types/airConditioningTypes";
import {
  deleteCooling,
  exportCoolingsCsv,
  exportCoolingsXlsx,
  getCoolings,
} from "@/services/air_conditioning/dapotCooling";
export default function AirconditioningCooling() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(
    listCoolingDeviceReducer,
    initialStateListCoolingDevice
  );
  const {
    coolingdevices,
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
    const fetchAirs = async () => {
      try {
        const page = searchParams.get("page") || "1";
        const nopage = globalFilter ? "no" : undefined;
        const data = await getCoolings(page, dispatch, globalFilter, nopage);
        console.log(data);
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_COOLINGDEVICES", payload: data.data });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch Cooling",
        });
      }
    };

    fetchAirs();
  }, [searchParams, globalFilter]);

  const columns: ColumnDef<CoolingDevice>[] = positionColumn
    ? [
        {
          accessorKey: "id",
          header: "Cooling Id",
          cell: ({ row }) => (
            <Link
              to={`/main/assets/datapotensi/detail/airconditioning/cooling?id=${row.original.id}`}
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
        { accessorKey: "type_name", header: "Type" },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "manufactur", header: "Manufactur" },
        { accessorKey: "indoor_sn", header: "Serial Number Indoor" },
        { accessorKey: "type_indoor", header: "type Indoor" },
        { accessorKey: "outdoor_sn", header: "Serial Number Outdoor" },
        { accessorKey: "type_outdoor", header: "type Outdoor" },
        { accessorKey: "paard_kracht", header: "Paard Kracht" },
        { accessorKey: "btu_hour", header: "BTU/H" },
        { accessorKey: "refrigerant", header: "gas refrigerant" },
        { accessorKey: "power", header: "power" },
        { accessorKey: "installation_date", header: "Installation Date" },
        { accessorKey: "maintenance_date", header: "Maintenance Date" },
        { accessorKey: "amount", header: "Jumlah" },
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
                    `/main/assets/datapotensi/category/update/airconditioning/cooling?id=${row.original.id}`
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
          header: "Air Id",
          cell: ({ row }) => (
            <Link
              to={`/main/assets/datapotensi/detail/airconditioning/cooling?id=${row.original.id}`}
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
        { accessorKey: "type_name", header: "Type" },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "manufactur", header: "Manufactur" },
        { accessorKey: "indoor_sn", header: "Serial Number Indoor" },
        { accessorKey: "type_indoor", header: "type Indoor" },
        { accessorKey: "outdoor_sn", header: "Serial Number Outdoor" },
        { accessorKey: "type_outdoor", header: "type Outdoor" },
        { accessorKey: "paard_kracht", header: "PK" },
        { accessorKey: "btu_hour", header: "BTU/H" },
        { accessorKey: "refrigerant", header: "gas refrigerant" },
        { accessorKey: "power", header: "power" },
        { accessorKey: "installation_date", header: "Installation Date" },
        { accessorKey: "maintenance_date", header: "Maintenance Date" },
        { accessorKey: "amount", header: "Jumlah" },
        { accessorKey: "waranty", header: "Garansi" },
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
                    `/main/assets/datapotensi/category/update/airconditioning/cooling?id=${row.original.id}`
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
    data: coolingdevices,
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
    const data = await deleteCooling(dispatch, id, assetId);
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
            title={`List Air`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="airconditioning"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
          />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPageDapot
            title={`List Air`}
            valueGlobalFilter={globalFilter}
            setGlobalFilter={dispatch}
            subCategory="airconditioning"
            columnToggle={positionColumn}
            exportToggle={exportToggle}
            setToggle={dispatch}
            exportCsv={exportCoolingsCsv}
            exportXlsx={exportCoolingsXlsx}
          />
          <div className={styles.tableSeal}>
            <div className={styles.tableWrapper}>
              <DapotButtonsCategory
                listpages={airListButtons}
                subCategory="airconditioning"
              />
              {coolingdevices.length > 0 ? (
                <div className={styles.tableDetail}>
                  <table
                    className={styles.assetTable}
                    {...{
                      style: {
                        width:
                          positionColumn && table.getCenterTotalSize() / 1.5,
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
                                    row.index === coolingdevices.length - 1 &&
                                    ind === 0
                                      ? "10px"
                                      : undefined,
                                  borderBottomRightRadius:
                                    row.index === coolingdevices.length - 1 &&
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
