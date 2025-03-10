import Pen from "@/assets/svg/pen.svg";
import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
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
// import HomeModal from "@/components/modal/HomeModal";
import { renderPagination } from "@/components/table/RenderPagination";
import { initialStateListUser, listUser } from "src/reducers/userReducer";
import { getUsers } from "@/services/user/userServices";
import { user } from "@/types/userTypes";

export default function ListUser() {
  const navigate = useNavigate();
  const listRole = [
    "developer",
    "monitoring",
    "vip",
    "admin",
    "special_guest",
    "fos",
    "cro",
    "me",
    "security",
    "guest",
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(listUser, initialStateListUser);
  const { user, pagination, isLoading, globalFilter } = state;
  // const [isShowModal, setIsShowModal] = useState(false);
  // const [idOriginal, setIdOriginal] = useState("");
  // const [assetIdOriginal, setAssetIdOriginal] = useState("");
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const page = searchParams.get("page") || "1";
        const nopage = globalFilter ? "no" : undefined;
        const data = await getUsers(page, dispatch, globalFilter, nopage);
        dispatch({ type: "SET_PAGINATION", payload: data.pagination });
        dispatch({ type: "SET_USER", payload: data.data });
      } catch (error) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch brands",
        });
      }
    };
    fetchBrands();
  }, []);

  const columns: ColumnDef<user>[] = [
    { accessorKey: "id", header: "Id" },
    {
      accessorKey: "name",
      header: "Nama",
    },
    { accessorKey: "status", header: "Status" },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => {
        return (
          <div style={{ fontSize: "1.8rem", fontWeight: "500" }}>
            {
              listRole[
                row.original.role.length > 3
                  ? Number(row.original.role.slice(-2)) - 1
                  : Number(row.original.role.slice(-1))
              ]
            }
          </div>
        );
      },
    },
    { accessorKey: "phone_number", header: "Phone" },
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
            onClick={() => navigate(`/main/admin/update?id=${row.original.id}`)}
          >
            <img src={Pen} alt="Edit" />
          </div>
          {/* <div
            className={styles.btnDelete}
            onClick={() => {
              setIdOriginal(row.original.id);
              setAssetIdOriginal(row.original.id);
              setIsShowModal(true);
            }}
          >
            <img src={Trash} alt="Turn Off" />
          </div> */}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: user,
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

  // const deleteHandle = async (id: string, assetId: string) => {
  //   const data = await deleteMaintenanceLicense(dispatch, id, assetId);
  //   if (data.success) {
  //     navigate(0);
  //   }
  // };

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : (
        <>
          <HeadPage title={`List License`} />
          <div
            onClick={() => navigate(`/main/admin/add`)}
            className={styles.addButton}
          >
            + Tambah User Baru
          </div>
          <div className={styles.tableSeal}>
            <div className={styles.tableWrapper}>
              {user.length > 0 ? (
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
                                    row.index === user.length - 1 && ind === 0
                                      ? "10px"
                                      : undefined,
                                  borderBottomRightRadius:
                                    row.index === user.length - 1 &&
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
          {/* <HomeModal display={isShowModal} action={setIsShowModal}>
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
          </HomeModal> */}
        </>
      )}
    </>
  );
}
