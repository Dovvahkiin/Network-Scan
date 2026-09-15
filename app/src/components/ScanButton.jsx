import scan from "../services/scan.js";
const ScanButton = () => {
  const handleScan = async () => {
    const result = await scan();
    return console.log(result);
  };
  return <button onClick={handleScan}>SCAN</button>;
};

export default ScanButton;
