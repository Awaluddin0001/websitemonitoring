import { useState, useEffect } from "react";
import { getRectifiers } from "@/services/dapotRectifiers";
import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPage";
import DapotButtonsCategory from "@/components/dapotFilter/DapotButtonsCategory";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
interface Rectifier {
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
  system: string;
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
  const [rectifiers, setRectifiers] = useState<Rectifier[]>([]);
  const [pagination, setPagination] = useState<{
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalRows: number;
  }>({
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>("");

  useEffect(() => {
    const fetchRectifiers = async () => {
      try {
        if (searchParams.get("page")) {
          const data = await getRectifiers(
            searchParams.get("page"),
            setIsLoading,
            setIsError
          );
          setPagination(data.pagination);
          setRectifiers(data.data);
          console.log(data);
        }
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
      }
    };

    fetchRectifiers();
  }, [searchParams]);

  const pageHandle = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`List Rectifier`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`List Rectifier`} />
          <DapotButtonsCategory
            listpages={[
              "rectifier",
              "battery",
              "panel",
              "ups",
              "trafo",
              "genset",
              "pdu",
              "cubicle",
            ]}
            subCategory="electrical"
          />
          {rectifiers.length > 0 ? (
            <div className={styles.tableDetail}>
              <table className={styles.assetTable}>
                <thead>
                  <tr className={`${styles.sticky} ${styles.stickyHeader}`}>
                    <th>Id</th>
                    <th>Vendor</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Role</th>
                    <th>Capacity (A)</th>
                    <th>Modul</th>
                    <th>Modul Capacity (A)</th>
                    <th>load Current</th>
                    <th>Occupancy</th>
                    <th>System</th>
                    <th>Installation Date</th>
                    <th>Maintenance Date</th>
                    <th>Remark Aging</th>
                    <th>Last update</th>
                    <th>Update By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rectifiers.map((item, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.id}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.vendor_name}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.brand_name}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.name}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.type}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.role}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.capacity}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.modul}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.capacity_modul}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.load_current}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.occupancy}%
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.system} Sytem
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.installation_date}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.maintenance_date}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.remark_aging}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.created_at}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
                        {item.user_name}
                      </td>
                      <td
                        style={{
                          background: index % 2 !== 0 ? "#a5fffa" : "",
                        }}
                      >
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
                                `/main/assets/datapotensi/category/electrical/rectifier/update?id=${item.id}`
                              )
                            }
                          >
                            <img src={Pen} alt="" />
                          </div>
                          <div className={styles.btnDelete}>
                            <img src={Trash} alt="" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.paginationContainer}>
                {pagination &&
                  Array.from({ length: pagination.totalPages }, (_, i) => (
                    <p
                      style={{
                        color:
                          pagination.currentPage === i + 1 ? "#fcd100" : "#333",
                      }}
                      key={i + 1}
                      // onClick={() =>
                      //   navigate(
                      //     `/main/assets/datapotensi/category/electrical/rectifier/list?page=${
                      //       i + 1
                      //     }`
                      //   )
                      // }
                      onClick={() => pageHandle(i + 1)}
                    >
                      {i + 1}
                    </p>
                  ))}
              </div>
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
        </>
      )}
    </>
  );
}
