import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import LoadingFetch from "@/components/loading/LoadingFetch";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";
import HomeModal from "@/components/modal/HomeModal";
import {
  initialStateListVendorElectrical,
  listVendorElectricalReducer,
} from "src/reducers/electricalReducer";
import {
  deleteVendorElectrical,
  getVendorElectrical,
} from "@/services/electrical/dapotElectrical";
import { ElectricalVendor } from "@/types/categoryTypes";

export default function ListVendorElectrical() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(
    listVendorElectricalReducer,
    initialStateListVendorElectrical
  );
  const { vendors, pagination, isLoading, globalFilter } = state;
  const [isShowModal, setIsShowModal] = useState(false);
  const [idOriginal, setIdOriginal] = useState("");
  const [assetIdOriginal, setAssetIdOriginal] = useState("");

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const page = searchParams.get("page") || "1";
        const nopage = globalFilter ? "no" : undefined;
        const data = await getVendorElectrical(
          page,
          dispatch,
          globalFilter,
          nopage
        );
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_VENDORS", payload: data.data });
      } catch (error) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch brands",
        });
      }
    };
    fetchVendors();
  }, []);

  const columns: ColumnDef<ElectricalVendor>[] = [
    { accessorKey: "id", header: "Vendor Id" },
    { accessorKey: "company", header: "Nama Perusahaan" },
    { accessorKey: "company_user_name", header: "Nama user" },
    { accessorKey: "number_phone", header: "Nomor Telepon" },
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
                `/main/assets/datapotensi/vendor/update/electrical?id=${row.original.id}`
              )
            }
          >
            <img src={Pen} alt="Edit" />
          </div>
          <div
            className={styles.btnDelete}
            onClick={() => {
              setIdOriginal(row.original.id);
              setAssetIdOriginal(row.original.id);
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
    data: vendors,
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
    const data = await deleteVendorElectrical(dispatch, id, assetId);
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
      ) : (
        <>
          <HeadPage title={`List Vendor Electrical `} />
          <div
            onClick={() =>
              navigate(`/main/assets/datapotensi/vendor/add/electrical`)
            }
            className={styles.addButton}
          >
            + Add New Vendor
          </div>
          {vendors.length > 0 ? (
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
                                onDoubleClick: () => header.column.resetSize(),
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
                              background: row.index % 2 !== 0 ? "#ffd1d1" : "",
                              borderBottomLeftRadius:
                                row.index === vendors.length - 1 && ind === 0
                                  ? "10px"
                                  : undefined,
                              borderBottomRightRadius:
                                row.index === vendors.length - 1 &&
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
