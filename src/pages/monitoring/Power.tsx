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
import { downloadExcelFile } from "@/services/power/exportService";
import DatePicker from "react-datepicker";

type DataGrafikPower = {
  date: Date;
  value: number;
};
type DataGrafikPanel = {
  date: Date;
  name: string;
  currentA: number;
  currentB: number;
  currentC: number;
  voltageRS: number;
  voltageST: number;
  voltageRT: number;
  activePowerTotal: number;
  apparentPower: number;
  frequency: number;
  powerMeter: string;
  status: true;
  id: string;
};

// const socket = io("http://localhost:3000");
function Power() {
  const [updateData, setUpdateData] = useState<any>();
  const [dataActive, setDataActive] = useState("apparent");
  const [_, setGraphToolTip] = useState<{ timestamp: string; value: number }>({
    timestamp: "",
    value: 0,
  });
  // untuk grafik
  const [pueDataGraf, setPueDataGraf] = useState<
    DataGrafikPower[] | undefined
  >();
  const [itLoadGraf, setItLoadGraf] = useState<DataGrafikPower[] | undefined>();
  const [facilityLoadGraf, setFacilityLoadGraf] = useState<
    DataGrafikPower[] | undefined
  >();

  const [panel1Data, setPanel1Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel2Data, setPanel2Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel3Data, setPanel3Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel4Data, setPanel4Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel5Data, setPanel5Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel6Data, setPanel6Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel7Data, setPanel7Data] = useState<DataGrafikPanel[] | undefined>();
  const [panel1Graf, setPanel1Graf] = useState<DataGrafikPower[] | undefined>();
  const [panel2Graf, setPanel2Graf] = useState<DataGrafikPower[] | undefined>();
  const [panel3Graf, setPanel3Graf] = useState<DataGrafikPower[] | undefined>();
  const [panel4Graf, setPanel4Graf] = useState<DataGrafikPower[] | undefined>();
  const [panel5Graf, setPanel5Graf] = useState<DataGrafikPower[] | undefined>();
  const [panel6Graf, setPanel6Graf] = useState<DataGrafikPower[] | undefined>();
  const [panel7Graf, setPanel7Graf] = useState<DataGrafikPower[] | undefined>();
  // untuk table
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [showModal, setShowModal] = useState(false);

  const nowUTC8 = moment().tz("Asia/Singapore"); // Waktu sekarang di UTC+8
  const initialEndDate = nowUTC8.toDate(); // Mengonversi ke objek Date
  const initialStartDate = nowUTC8.subtract(24, "hours").toDate();
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate);

  const { data, loading, error } = useMonitoringSystem(
    "http://192.168.1.62:2022/api/v1/monitoring/powersmeter"
  );

  // Handle click to set active class
  const showTableHandler = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // Toggle active state
  };
  useEffect(() => {
    console.log(updateData);
    setDataActive("apparent");
    const lasttValueArrPower:
      | {
          timestamp: string;
          pue: { value: number };
          itload: { value: number };
          facilityload: { value: number };
        }
      | any = (arr: any) => {
      return arr[arr.length - 1];
    };
    const returnValuePue = (arr: any) => {
      return arr.map((item: any) => {
        return {
          date: moment(item.timestamp as string)
            .tz("Asia/Singapore")
            .format("YYYY-MM-DD HH:mm:ss"),
          value: Number(item.pue.value.toFixed(2)),
        };
      });
    };
    const returnValueFL = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        value: Number(item.facilityload.value.toFixed(2)),
      }));
    };
    const returnValueIL = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        value: Number(item.itload.value.toFixed(2)),
      }));
    };

    const returnPanel1 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel1.name,
        currentA: Number(item.panel1.currentA.toFixed(2)),
        currentB: Number(item.panel1.currentB.toFixed(2)),
        currentC: Number(item.panel1.currentC.toFixed(2)),
        voltageRS: Number(item.panel1.voltageRS.toFixed(2)),
        voltageST: Number(item.panel1.voltageST.toFixed(2)),
        voltageRT: Number(item.panel1.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel1.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel1.apparentPower.toFixed(2)),
        frequency: Number(item.panel1.frequency.toFixed(2)),
        powerMeter: item.panel1.powerMeter,
        status: item.panel1.status,
        id: item.panel1.id,
      }));
    };
    const returnPanel2 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel2.name,
        currentA: Number(item.panel2.currentA.toFixed(2)),
        currentB: Number(item.panel2.currentB.toFixed(2)),
        currentC: Number(item.panel2.currentC.toFixed(2)),
        voltageRS: Number(item.panel2.voltageRS.toFixed(2)),
        voltageST: Number(item.panel2.voltageST.toFixed(2)),
        voltageRT: Number(item.panel2.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel2.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel2.apparentPower.toFixed(2)),
        frequency: Number(item.panel2.frequency.toFixed(2)),
        powerMeter: item.panel2.powerMeter,
        status: item.panel2.status,
        id: item.panel2.id,
      }));
    };
    const returnPanel3 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel3.name,
        currentA: Number(item.panel3.currentA.toFixed(2)),
        currentB: Number(item.panel3.currentB.toFixed(2)),
        currentC: Number(item.panel3.currentC.toFixed(2)),
        voltageRS: Number(item.panel3.voltageRS.toFixed(2)),
        voltageST: Number(item.panel3.voltageST.toFixed(2)),
        voltageRT: Number(item.panel3.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel3.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel3.apparentPower.toFixed(2)),
        frequency: Number(item.panel3.frequency.toFixed(2)),
        powerMeter: item.panel3.powerMeter,
        status: item.panel3.status,
        id: item.panel3.id,
      }));
    };
    const returnPanel4 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel4.name,
        currentA: Number(item.panel4.currentA.toFixed(2)),
        currentB: Number(item.panel4.currentB.toFixed(2)),
        currentC: Number(item.panel4.currentC.toFixed(2)),
        voltageRS: Number(item.panel4.voltageRS.toFixed(2)),
        voltageST: Number(item.panel4.voltageST.toFixed(2)),
        voltageRT: Number(item.panel4.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel4.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel4.apparentPower.toFixed(2)),
        frequency: Number(item.panel4.frequency.toFixed(2)),
        powerMeter: item.panel4.powerMeter,
        status: item.panel4.status,
        id: item.panel4.id,
      }));
    };
    const returnPanel5 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel5.name,
        currentA: Number(item.panel5.currentA.toFixed(2)),
        currentB: Number(item.panel5.currentB.toFixed(2)),
        currentC: Number(item.panel5.currentC.toFixed(2)),
        voltageRS: Number(item.panel5.voltageRS.toFixed(2)),
        voltageST: Number(item.panel5.voltageST.toFixed(2)),
        voltageRT: Number(item.panel5.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel5.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel5.apparentPower.toFixed(2)),
        frequency: Number(item.panel5.frequency.toFixed(2)),
        powerMeter: item.panel5.powerMeter,
        status: item.panel5.status,
        id: item.panel5.id,
      }));
    };
    const returnPanel6 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel6.name,
        currentA: Number(item.panel6.currentA.toFixed(2)),
        currentB: Number(item.panel6.currentB.toFixed(2)),
        currentC: Number(item.panel6.currentC.toFixed(2)),
        voltageRS: Number(item.panel6.voltageRS.toFixed(2)),
        voltageST: Number(item.panel6.voltageST.toFixed(2)),
        voltageRT: Number(item.panel6.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel6.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel6.apparentPower.toFixed(2)),
        frequency: Number(item.panel6.frequency.toFixed(2)),
        powerMeter: item.panel6.powerMeter,
        status: item.panel6.status,
        id: item.panel6.id,
      }));
    };
    const returnPanel7 = (arr: any) => {
      return arr.map((item: any) => ({
        date: moment(item.timestamp as string)
          .tz("Asia/Singapore")
          .format("YYYY-MM-DD HH:mm:ss"),
        name: item.panel7.name,
        currentA: Number(item.panel7.currentA.toFixed(2)),
        currentB: Number(item.panel7.currentB.toFixed(2)),
        currentC: Number(item.panel7.currentC.toFixed(2)),
        voltageRS: Number(item.panel7.voltageRS.toFixed(2)),
        voltageST: Number(item.panel7.voltageST.toFixed(2)),
        voltageRT: Number(item.panel7.voltageRT.toFixed(2)),
        activePowerTotal: Number(item.panel7.activePowerTotal.toFixed(2)),
        apparentPower: Number(item.panel7.apparentPower.toFixed(2)),
        frequency: Number(item.panel7.frequency.toFixed(2)),
        powerMeter: item.panel7.powerMeter,
        status: item.panel7.status,
        id: item.panel7.id,
      }));
    };
    const returnPanel1Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item.panel1.apparentPower.toFixed(2)),
      }));
    };
    const returnPanel2Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item.panel2.apparentPower.toFixed(2)),
      }));
    };
    const returnPanel3Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item.panel3.apparentPower.toFixed(2)),
      }));
    };
    const returnPanel4Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel4.apparentPower.toFixed(2)),
      }));
    };
    const returnPanel5Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel5.apparentPower.toFixed(2)),
      }));
    };
    const returnPanel6Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel6.apparentPower.toFixed(2)),
      }));
    };
    const returnPanel7Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel7.apparentPower.toFixed(2)),
      }));
    };

    if (data.data) {
      if (data.data.length > 0) {
        setFacilityLoadGraf(returnValueFL(data.data));
        setPueDataGraf(returnValuePue(data.data));
        setItLoadGraf(returnValueIL(data.data));
        setPanel1Graf(returnPanel1Graph(data.data));
        setPanel2Graf(returnPanel2Graph(data.data));
        setPanel3Graf(returnPanel3Graph(data.data));
        setPanel4Graf(returnPanel4Graph(data.data));
        setPanel5Graf(returnPanel5Graph(data.data));
        setPanel6Graf(returnPanel6Graph(data.data));
        setPanel7Graf(returnPanel7Graph(data.data));
        setUpdateData(lasttValueArrPower(data.data));
        setPanel1Data(returnPanel1(data.data));
        setPanel2Data(returnPanel2(data.data));
        setPanel3Data(returnPanel3(data.data));
        setPanel4Data(returnPanel4(data.data));
        setPanel5Data(returnPanel5(data.data));
        setPanel6Data(returnPanel6(data.data));
        setPanel7Data(returnPanel7(data.data));
      }
    }
  }, [data]);

  useEffect(() => {
    let returnPanel1Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item.panel1.apparentPower.toFixed(2)),
      }));
    };
    let returnPanel2Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item.panel2.apparentPower.toFixed(2)),
      }));
    };
    let returnPanel3Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),
        value: Number(item.panel3.apparentPower.toFixed(2)),
      }));
    };
    let returnPanel4Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel4.apparentPower.toFixed(2)),
      }));
    };
    let returnPanel5Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel5.apparentPower.toFixed(2)),
      }));
    };
    let returnPanel6Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel6.apparentPower.toFixed(2)),
      }));
    };
    let returnPanel7Graph = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timestamp as string),

        value: Number(item.panel7.apparentPower.toFixed(2)),
      }));
    };
    if (dataActive === "apparent") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.apparentPower.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.apparentPower.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.apparentPower.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.apparentPower.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.apparentPower.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.apparentPower.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.apparentPower.toFixed(2)),
        }));
      };
    } else if (dataActive === "active") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.activePowerTotal.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.activePowerTotal.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.activePowerTotal.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel4.activePowerTotal.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel5.activePowerTotal.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel6.activePowerTotal.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel7.activePowerTotal.toFixed(2)),
        }));
      };
    } else if (dataActive === "currenta") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.currentA.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.currentA.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.currentA.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.currentA.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.currentA.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.currentA.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.currentA.toFixed(2)),
        }));
      };
    } else if (dataActive === "currentb") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.currentB.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.currentB.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.currentB.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.currentB.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.currentB.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.currentB.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.currentB.toFixed(2)),
        }));
      };
    } else if (dataActive === "currentc") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.currentC.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.currentC.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.currentC.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.currentC.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.currentC.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.currentC.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.currentC.toFixed(2)),
        }));
      };
    } else if (dataActive === "voltagea") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.voltageRS.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.voltageRS.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.voltageRS.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.voltageRS.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.voltageRS.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.voltageRS.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.voltageRS.toFixed(2)),
        }));
      };
    } else if (dataActive === "voltageb") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.voltageST.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.voltageST.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.voltageST.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.voltageST.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.voltageST.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.voltageST.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.voltageST.toFixed(2)),
        }));
      };
    } else if (dataActive === "voltagec") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.voltageRT.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.voltageRT.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.voltageRT.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.voltageRT.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.voltageRT.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.voltageRT.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.voltageRT.toFixed(2)),
        }));
      };
    } else if (dataActive === "frekuensi") {
      returnPanel1Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel1.frequency.toFixed(2)),
        }));
      };
      returnPanel2Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel2.frequency.toFixed(2)),
        }));
      };
      returnPanel3Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),
          value: Number(item.panel3.frequency.toFixed(2)),
        }));
      };
      returnPanel4Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel4.frequency.toFixed(2)),
        }));
      };
      returnPanel5Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel5.frequency.toFixed(2)),
        }));
      };
      returnPanel6Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel6.frequency.toFixed(2)),
        }));
      };
      returnPanel7Graph = (arr: any) => {
        return arr.map((item: any) => ({
          date: new Date(item.timestamp as string),

          value: Number(item.panel7.frequency.toFixed(2)),
        }));
      };
    }

    if (data.data) {
      if (data.data.length > 0) {
        setPanel1Graf(returnPanel1Graph(data.data));
        setPanel2Graf(returnPanel2Graph(data.data));
        setPanel3Graf(returnPanel3Graph(data.data));
        setPanel4Graf(returnPanel4Graph(data.data));
        setPanel5Graf(returnPanel5Graph(data.data));
        setPanel6Graf(returnPanel6Graph(data.data));
        setPanel7Graf(returnPanel7Graph(data.data));
      }
    }
  }, [dataActive]);

  const columns: ColumnDef<DataGrafikPanel | DataGrafikPower | undefined>[] =
    activeIndex === 1 || activeIndex === 2 || activeIndex === 3
      ? [
          { accessorKey: "date", header: "Waktu Pengambilan Data" },
          { accessorKey: "value", header: "Nilai" },
        ]
      : [
          { accessorKey: "name", header: "Nama Panel" },
          { accessorKey: "date", header: "Waktu Pengambilan Data" },
          { accessorKey: "currentA", header: "Arus R (A)" },
          { accessorKey: "currentB", header: "Arus S (A)" },
          { accessorKey: "currentC", header: "Arus T (A)" },
          { accessorKey: "voltageRS", header: "Tegangan R-S (V)" },
          { accessorKey: "voltageST", header: "Tegangan S-T (V)" },
          { accessorKey: "voltageRT", header: "Tegangan R-T (V)" },
          { accessorKey: "activePowerTotal", header: "Active Power (kW)" },
          { accessorKey: "apparentPower", header: "Apparent Power (kVa)" },
          { accessorKey: "frequency", header: "Frekuensi (Hz)" },
          { accessorKey: "powerMeter", header: "Jenis Power Meter" },
          { accessorKey: "status", header: "Status Panel" },
        ];
  const table = useReactTable({
    data:
      activeIndex === 1
        ? pueDataGraf?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 2
        ? facilityLoadGraf?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 3
        ? itLoadGraf?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 4
        ? panel1Data?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 5
        ? panel2Data?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 6
        ? panel4Data?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 7
        ? panel5Data?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 8
        ? panel3Data?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : activeIndex === 9
        ? panel6Data?.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) ?? []
        : panel7Data?.sort(
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
        <HeadPageMonitoring title="Power System Monitoring - TTC Pengayoman" />
        <MonitoringDown />
      </>
    );

  return (
    <>
      <HeadPageMonitoring title="Power System Monitoring - TTC Pengayoman" />
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
              dataActive === "apparent" ? styles.active : ""
            }`}
            onClick={() => setDataActive("apparent")}
          >
            Apparent Power (kVA)
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "active" ? styles.active : ""
            }`}
            onClick={() => setDataActive("active")}
          >
            Active Power (kW)
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "currenta" ? styles.active : ""
            }`}
            onClick={() => setDataActive("currenta")}
          >
            Current R
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "currentb" ? styles.active : ""
            }`}
            onClick={() => setDataActive("currentb")}
          >
            Current S
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "currentc" ? styles.active : ""
            }`}
            onClick={() => setDataActive("currentc")}
          >
            Current T
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "voltagea" ? styles.active : ""
            }`}
            onClick={() => setDataActive("voltagea")}
          >
            Voltage R-S
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "voltageb" ? styles.active : ""
            }`}
            onClick={() => setDataActive("voltageb")}
          >
            Voltage S-T
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "voltagec" ? styles.active : ""
            }`}
            onClick={() => setDataActive("voltagec")}
          >
            Voltage R-T
          </div>
          <div
            className={`${styles.buttonDataActive} ${
              dataActive === "frekuensi" ? styles.active : ""
            }`}
            onClick={() => setDataActive("frekuensi")}
          >
            Frekuensi
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
                    ? "Table Data PUE by System"
                    : activeIndex === 2
                    ? "Table Data Facility Load by System"
                    : activeIndex === 3
                    ? "Table Data IT Load by System"
                    : activeIndex === 4
                    ? `Table Data ${updateData.panel1.name} by System`
                    : activeIndex === 5
                    ? `Table Data ${updateData.panel2.name} by System`
                    : activeIndex === 6
                    ? `Table Data ${updateData.panel4.name} by System`
                    : activeIndex === 7
                    ? `Table Data ${updateData.panel5.name} by System`
                    : activeIndex === 8
                    ? `Table Data ${updateData.panel3.name} by System`
                    : activeIndex === 9
                    ? `Table Data ${updateData.panel6.name} by System`
                    : `Table Data ${updateData.panel7.name} by System`}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <h2 style={{ fontSize: "2rem" }}>
                    {activeIndex === 1
                      ? `Nilai Sekarang ${updateData.pue.value.toFixed(2)}`
                      : activeIndex === 2
                      ? `Nilai Sekarang ${updateData.facilityload.value.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 3
                      ? `Nilai Sekarang ${updateData.itload.value.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 4
                      ? `Nilai Sekarang ${updateData.panel1.apparentPower.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 5
                      ? `Nilai Sekarang ${updateData.panel2.apparentPower.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 6
                      ? `Nilai Sekarang ${updateData.panel4.apparentPower.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 7
                      ? `Nilai Sekarang ${updateData.panel5.apparentPower.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 8
                      ? `Nilai Sekarang ${updateData.panel3.apparentPower.toFixed(
                          2
                        )} kVa`
                      : activeIndex === 9
                      ? `Nilai Sekarang ${updateData.panel6.apparentPower.toFixed(
                          2
                        )} kVa`
                      : `Nilai Sekarang ${updateData.panel7.apparentPower.toFixed(
                          2
                        )} kVa`}
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
            {pueDataGraf && (
              <TrendGrafic
                data={pueDataGraf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data PUE - 24 Jam"
                fontSize="14px"
                unit=" "
                mode="24hour"
                positionLabel={116}
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
            {facilityLoadGraf && (
              <TrendGrafic
                data={facilityLoadGraf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data Facility Load - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {itLoadGraf && (
              <TrendGrafic
                data={itLoadGraf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data IT Load - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
              activeIndex === 4 ? styles.active : ""
            }`}
            onClick={() => showTableHandler(4)}
          >
            {panel1Graf && (
              <TrendGrafic
                data={panel1Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data LVMDP1 - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {panel2Graf && (
              <TrendGrafic
                data={panel2Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data LVMDP2 - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {panel4Graf && (
              <TrendGrafic
                data={panel4Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data UPS A - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {panel5Graf && (
              <TrendGrafic
                data={panel5Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data UPS B - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {panel3Graf && (
              <TrendGrafic
                data={panel3Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data ACPDB1.18 - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {panel6Graf && (
              <TrendGrafic
                data={panel6Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data ACPDB1.14 - 24 Jam"
                fontSize="14px"
                unit=" kVa"
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
            {panel7Graf && (
              <TrendGrafic
                data={panel7Graf}
                heightGrafic={140}
                lineColor="#d5c830"
                pointColor="#000"
                label="Data ACPDB1.16 - 24 Jam"
                fontSize="14px"
                unit=" kVa"
                mode="24hour"
                positionLabel={132}
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
                  downloadExcelFile(startDate as Date, endDate as Date)
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

export default Power;
