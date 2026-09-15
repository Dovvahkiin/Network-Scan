import { useState } from "react";
import scan from "../services/scan.js";

const useScan = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      const response = await scan();
      setResult(response);
    } catch (error) {
      return console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, handleScan };
};

export default useScan;
