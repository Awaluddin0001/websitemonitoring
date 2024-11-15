import styles from "@/css/module/Power.module.css";
import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";
import TrendGrafic from "@/components/grafic/TendGrafic";
import { useEffect, useState } from "react";
import useMonitoringSystem from "@/hooks/useMonitoringSystem";
import LoadingPage from "@/components/loading/LoadingPage";
import MonitoringDown from "@/components/error/MonitoringDown";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import moment from "moment-timezone";
import { downloadExcelFileThermal } from "@/services/power/exportService";
import DatePicker from "react-datepicker";

type GrafikThermal = {
  date: Date;
  value: number;
};

type TableThermal = {
  date: Date;
  temperature: number;
  humidity: number;
  name: string;
};

function ThermalPage() {
  const [updateData, setUpdateData] = useState<any>();
  const [dataActive, setDataActive] = useState("temperature");
  const [_, setGraphToolTip] = useState<{ timestamp: string; value: number }>({
    timestamp: "",
    value: 0,
  });

  const [tableThermal, setTableThermal] = useState<
    | {
        RO106: TableThermal[];
        RO107: TableThermal[];
        RO108: TableThermal[];
        RO110: TableThermal[];
        RO111: TableThermal[];
        RO206: TableThermal[];
        RO207: TableThermal[];
        RO208: TableThermal[];
        RO209: TableThermal[];
        RO307: TableThermal[];
        RO308: TableThermal[];
        RO309: TableThermal[];
        RO311: TableThermal[];
        RO312: TableThermal[];
        RO409: TableThermal[];
        RO410: TableThermal[];
        RO411: TableThermal[];
        RO414: TableThermal[];
      }
    | undefined
  >();
  const [grafThermal, setGrafThermal] = useState<
    | {
        RO106: GrafikThermal[];
        RO107: GrafikThermal[];
        RO108: GrafikThermal[];
        RO110: GrafikThermal[];
        RO111: GrafikThermal[];
        RO206: GrafikThermal[];
        RO207: GrafikThermal[];
        RO208: GrafikThermal[];
        RO209: GrafikThermal[];
        RO307: GrafikThermal[];
        RO308: GrafikThermal[];
        RO309: GrafikThermal[];
        RO311: GrafikThermal[];
        RO312: GrafikThermal[];
        RO409: GrafikThermal[];
        RO410: GrafikThermal[];
        RO411: GrafikThermal[];
        RO414: GrafikThermal[];
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
    "https://apipengayoman.ipagemakassar.com/api/v1/monitoring/2031/thermal"
  );

  // Handle click to set active class
  const showTableHandler = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // Toggle active state
  };

  useEffect(() => {
    setDataActive("temperature");
    const lasttValueArrPower: any = (arr: any) => {
      return arr[arr.length - 1];
    };

    const returnTable = (arr: any, name: any) => {
      return arr.map((item: any) => {
        return {
          date: moment(item.timestamp as string)
            .tz("Asia/Singapore")
            .format("YYYY-MM-DD HH:mm:ss"),
          name: item[`${name}`].name,
          temperature: Number(item[`${name}`].temperature),
          humidity: Number(item[`${name}`].humidity),
        };
      });
    };

    const returnGraph = (arr: any, name: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item[`${name}`].temperature),
      }));
    };

    if (data.data) {
      if (data.data.length > 0) {
        setUpdateData(lasttValueArrPower(data.data));
        setGrafThermal((obj) => {
          return {
            ...obj,
            RO106: returnGraph(data.data, "RO106"),
            RO107: returnGraph(data.data, "RO107"),
            RO108: returnGraph(data.data, "RO108"),
            RO110: returnGraph(data.data, "RO110"),
            RO111: returnGraph(data.data, "RO111"),
            RO206: returnGraph(data.data, "RO206"),
            RO207: returnGraph(data.data, "RO207"),
            RO208: returnGraph(data.data, "RO208"),
            RO209: returnGraph(data.data, "RO209"),
            RO307: returnGraph(data.data, "RO307"),
            RO308: returnGraph(data.data, "RO308"),
            RO309: returnGraph(data.data, "RO309"),
            RO311: returnGraph(data.data, "RO311"),
            RO312: returnGraph(data.data, "RO312"),
            RO409: returnGraph(data.data, "RO409"),
            RO410: returnGraph(data.data, "RO410"),
            RO411: returnGraph(data.data, "RO411"),
            RO414: returnGraph(data.data, "RO414"),
          };
        });
        setTableThermal((obj) => {
          return {
            ...obj,
            RO106: returnTable(data.data, "RO106"),
            RO107: returnTable(data.data, "RO107"),
            RO108: returnTable(data.data, "RO108"),
            RO110: returnTable(data.data, "RO110"),
            RO111: returnTable(data.data, "RO111"),
            RO206: returnTable(data.data, "RO206"),
            RO207: returnTable(data.data, "RO207"),
            RO208: returnTable(data.data, "RO208"),
            RO209: returnTable(data.data, "RO209"),
            RO307: returnTable(data.data, "RO307"),
            RO308: returnTable(data.data, "RO308"),
            RO309: returnTable(data.data, "RO309"),
            RO311: returnTable(data.data, "RO311"),
            RO312: returnTable(data.data, "RO312"),
            RO409: returnTable(data.data, "RO409"),
            RO410: returnTable(data.data, "RO410"),
            RO411: returnTable(data.data, "RO411"),
            RO414: returnTable(data.data, "RO414"),
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
          dataActive === "temperature"
            ? Number(item[`${name}`].temperature)
            : Number(item[`${name}`].humidity),
      }));
    };
    if (data.data) {
      if (data.data.length > 0) {
        setGrafThermal((obj) => {
          return {
            ...obj,
            RO106: returnGraph(data.data, "RO106"),
            RO107: returnGraph(data.data, "RO107"),
            RO108: returnGraph(data.data, "RO108"),
            RO110: returnGraph(data.data, "RO110"),
            RO111: returnGraph(data.data, "RO111"),
            RO206: returnGraph(data.data, "RO206"),
            RO207: returnGraph(data.data, "RO207"),
            RO208: returnGraph(data.data, "RO208"),
            RO209: returnGraph(data.data, "RO209"),
            RO307: returnGraph(data.data, "RO307"),
            RO308: returnGraph(data.data, "RO308"),
            RO309: returnGraph(data.data, "RO309"),
            RO311: returnGraph(data.data, "RO311"),
            RO312: returnGraph(data.data, "RO312"),
            RO409: returnGraph(data.data, "RO409"),
            RO410: returnGraph(data.data, "RO410"),
            RO411: returnGraph(data.data, "RO411"),
            RO414: returnGraph(data.data, "RO414"),
          };
        });
      }
    }
  }, [dataActive]);

  const columns: ColumnDef<TableThermal | undefined>[] = [
    { accessorKey: "name", header: "Nama Ruangan" },
    { accessorKey: "date", header: "Waktu Pengambilan Data" },
    {
      accessorKey: "temperature",
      header: "Suhu (°C)",
      cell: ({ row }) => (
        <p style={{ fontSize: "1.8rem" }}>
          {row.original?.temperature ? row.original.temperature : 0} °C
        </p>
      ),
    },
    {
      accessorKey: "humidity",
      header: "Kelembaban (%)",
      cell: ({ row }) => (
        <p style={{ fontSize: "1.8rem" }}>
          {row.original?.humidity ? row.original.humidity : 0} %
        </p>
      ),
    },
  ];
  const table = useReactTable({
    data:
      activeIndex === 1
        ? tableThermal?.RO106?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 2
        ? tableThermal?.RO107?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 3
        ? tableThermal?.RO108?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 4
        ? tableThermal?.RO110?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 5
        ? tableThermal?.RO111?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 6
        ? tableThermal?.RO206?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 7
        ? tableThermal?.RO207?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 8
        ? tableThermal?.RO208?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 9
        ? tableThermal?.RO209?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 10
        ? tableThermal?.RO307?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 11
        ? tableThermal?.RO308?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 12
        ? tableThermal?.RO309?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 13
        ? tableThermal?.RO311?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 14
        ? tableThermal?.RO312?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 15
        ? tableThermal?.RO409?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 16
        ? tableThermal?.RO410?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 17
        ? tableThermal?.RO411?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : tableThermal?.RO414?.sort(
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
        <HeadPageMonitoring title="Thermal System Monitoring - TTC Pengayoman" />
        <MonitoringDown />
      </>
    );

  return (
    <>
      <HeadPageMonitoring title="Thermal System Monitoring - TTC Pengayoman" />
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
              dataActive === "temperature" ? styles.active : ""
            }`}
            onClick={() => setDataActive("temperature")}
          >
            Temperature
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "humidity" ? styles.active : ""
            }`}
            onClick={() => setDataActive("humidity")}
          >
            Humidity
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
                    ? `Table Data ${updateData.RO106.name} by System`
                    : activeIndex === 2
                    ? `Table Data ${updateData.RO107.name} by System`
                    : activeIndex === 3
                    ? `Table Data ${updateData.RO108.name} by System`
                    : activeIndex === 4
                    ? `Table Data ${updateData.RO110.name} by System`
                    : activeIndex === 5
                    ? `Table Data ${updateData.RO111.name} by System`
                    : activeIndex === 6
                    ? `Table Data ${updateData.RO206.name} by System`
                    : activeIndex === 7
                    ? `Table Data ${updateData.RO207.name} by System`
                    : activeIndex === 8
                    ? `Table Data ${updateData.RO208.name} by System`
                    : activeIndex === 9
                    ? `Table Data ${updateData.RO209.name} by System`
                    : activeIndex === 10
                    ? `Table Data ${updateData.RO307.name} by System`
                    : activeIndex === 11
                    ? `Table Data ${updateData.RO308.name} by System`
                    : activeIndex === 12
                    ? `Table Data ${updateData.RO311.name} by System`
                    : activeIndex === 13
                    ? `Table Data ${updateData.RO312.name} by System`
                    : activeIndex === 14
                    ? `Table Data ${updateData.RO409.name} by System`
                    : activeIndex === 15
                    ? `Table Data ${updateData.RO410.name} by System`
                    : activeIndex === 16
                    ? `Table Data ${updateData.RO411.name} by System`
                    : `Table Data ${updateData.RO414.name} by System`}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <h2 style={{ fontSize: "2rem" }}>
                    {activeIndex === 1
                      ? `Nilai Sekarang ${updateData.RO106.value}`
                      : activeIndex === 2
                      ? `Nilai Sekarang ${updateData.RO107.value}`
                      : activeIndex === 3
                      ? `Nilai Sekarang ${updateData.RO108.value}`
                      : activeIndex === 4
                      ? `Nilai Sekarang ${updateData.RO110.value}`
                      : activeIndex === 5
                      ? `Nilai Sekarang ${updateData.RO111.value}`
                      : activeIndex === 6
                      ? `Nilai Sekarang ${updateData.RO206.value}`
                      : activeIndex === 7
                      ? `Nilai Sekarang ${updateData.RO207.value}`
                      : activeIndex === 8
                      ? `Nilai Sekarang ${updateData.RO208.value}`
                      : activeIndex === 9
                      ? `Nilai Sekarang ${updateData.RO209.value}`
                      : activeIndex === 10
                      ? `Nilai Sekarang ${updateData.RO307.value}`
                      : activeIndex === 11
                      ? `Nilai Sekarang ${updateData.RO308.value}`
                      : activeIndex === 12
                      ? `Nilai Sekarang ${updateData.RO311.value}`
                      : activeIndex === 13
                      ? `Nilai Sekarang ${updateData.RO312.value}`
                      : activeIndex === 14
                      ? `Nilai Sekarang ${updateData.RO409.value}`
                      : activeIndex === 15
                      ? `Nilai Sekarang ${updateData.RO410.value}`
                      : activeIndex === 16
                      ? `Nilai Sekarang ${updateData.RO411.value}`
                      : `Nilai Sekarang ${updateData.RO414.value}`}
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
            {grafThermal?.RO106 && (
              <TrendGrafic
                data={grafThermal?.RO106}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO106[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={161}
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
            {grafThermal?.RO107 && (
              <TrendGrafic
                data={grafThermal?.RO107}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO107[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={161}
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
            {grafThermal?.RO108 && (
              <TrendGrafic
                data={grafThermal?.RO108}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO108[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={161}
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
            {grafThermal?.RO110 && (
              <TrendGrafic
                data={grafThermal?.RO110}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO110[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
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
            {grafThermal?.RO111 && (
              <TrendGrafic
                data={grafThermal?.RO111}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO111[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                setValue={setGraphToolTip}
                backgroundColor="#fff"
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 6 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(6)}
          >
            {grafThermal?.RO206 && (
              <TrendGrafic
                data={grafThermal?.RO206}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO206[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 7 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(7)}
          >
            {grafThermal?.RO207 && (
              <TrendGrafic
                data={grafThermal?.RO207}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO207[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 8 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(8)}
          >
            {grafThermal?.RO208 && (
              <TrendGrafic
                data={grafThermal?.RO208}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO208[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 9 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(9)}
          >
            {grafThermal?.RO209 && (
              <TrendGrafic
                data={grafThermal?.RO209}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO209[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 10 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(10)}
          >
            {grafThermal?.RO307 && (
              <TrendGrafic
                data={grafThermal?.RO307}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO307[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 11 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(11)}
          >
            {grafThermal?.RO308 && (
              <TrendGrafic
                data={grafThermal?.RO308}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO308[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 12 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(12)}
          >
            {grafThermal?.RO309 && (
              <TrendGrafic
                data={grafThermal?.RO309}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO309[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 13 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(13)}
          >
            {grafThermal?.RO311 && (
              <TrendGrafic
                data={grafThermal?.RO311}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO311[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 14 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(14)}
          >
            {grafThermal?.RO312 && (
              <TrendGrafic
                data={grafThermal?.RO312}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO312[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 15 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(15)}
          >
            {grafThermal?.RO409 && (
              <TrendGrafic
                data={grafThermal?.RO409}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO409[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={132}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 16 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(16)}
          >
            {grafThermal?.RO410 && (
              <TrendGrafic
                data={grafThermal?.RO410}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO410[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={160}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 17 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(17)}
          >
            {grafThermal?.RO411 && (
              <TrendGrafic
                data={grafThermal?.RO411}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO411[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={160}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
                stroke="#000"
              />
            )}
          </div>
          <div
            className={`${styles.containerValue} ${
              activeIndex === 18 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(18)}
          >
            {grafThermal?.RO414 && (
              <TrendGrafic
                data={grafThermal?.RO414}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label={`Data ${tableThermal?.RO414[0].name} - 24 Jam`}
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={160}
                backgroundColor="#fff"
                setValue={setGraphToolTip}
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
                onClick={() =>
                  downloadExcelFileThermal(startDate as Date, endDate as Date)
                }
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

export default ThermalPage;
