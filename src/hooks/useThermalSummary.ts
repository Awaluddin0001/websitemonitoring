import { useEffect, useState } from "react";
import {
  percentile,
  calculateIQR,
  calculateMode,
  findMin,
  findMax,
} from "@/utils/thermalFunction"; // Import your utility functions

const useThermalSummary = (array: Promise<number[]>) => {
  const [processedData, setProcessedData] = useState<unknown[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedArr = await array;
      const q25 = await percentile(resolvedArr, 25);
      const q50 = await percentile(resolvedArr, 50);
      const q75 = await percentile(resolvedArr, 75);
      const iqr = await calculateIQR(resolvedArr);
      const modes = await calculateMode(resolvedArr);
      const min = await findMin(resolvedArr);
      const max = await findMax(resolvedArr);

      // Set the processed data array
      setProcessedData([q25, q50, q75, iqr, modes, min, max]);
    };

    fetchData();
  }, [array]);

  return processedData;
};

export default useThermalSummary;
