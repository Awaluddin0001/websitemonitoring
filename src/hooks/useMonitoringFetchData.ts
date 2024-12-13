// src/hooks/useFetchData.ts
import { useState, useEffect } from "react";
import axios from "axios";

const useMonitoringFetchData = (url: string) => {
  const [data, setData] = useState<{
    success: string;
    result: {
      bbmData: { data: Array<any>; success: boolean };
      powerData: [];
      thermalData: object;
      pacMonitoring: object;
    };
    lastUpdate: string;
  }>({
    success: "",
    result: {
      bbmData: { data: [], success: false },
      powerData: [],
      thermalData: {},
      pacMonitoring: {},
    },
    lastUpdate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      const now = new Date();
      const seconds = now.getUTCSeconds();
      const minutes = now.getUTCMinutes();

      // Check if it is 5 minutes past the hour plus 30 seconds (UTC+8)
      if (seconds === 30 && minutes % 5 === 0) {
        fetchData();
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [url]);

  return { data, loading, error };
};

export default useMonitoringFetchData;
