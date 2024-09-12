import axios from "axios";
import { saveAs } from "file-saver";
import moment from "moment-timezone";

export const downloadExcelFile = async (startDate: Date, endDate: Date) => {
  const singaporeTime = moment().tz("Asia/Singapore").format();
  const nameDate = moment(singaporeTime).format("DD-MM-YYYY");
  try {
    const response = await axios.get(
      "http://192.168.1.62:2022/api/v1/monitoring/powersmeter/export-power", // Adjust the URL if necessary
      {
        params: {
          starttimestamp: startDate,
          endtimestamp: endDate,
        },
        responseType: "blob",
      }
    );

    // Create a blob from the response data
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Use file-saver to trigger a download
    saveAs(blob, `power_data_ttc_pengayoman_${nameDate}.xlsx`);
  } catch (error) {
    console.error("Error downloading the Excel file:", error);
  }
};
