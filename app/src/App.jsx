import ScanButton from "./components/ScanButton";
import useScan from "./hooks/useScan.js";
function App() {
  const { handleScan, loading, result } = useScan();

  return (
    <>
      <h1>Welcome</h1>
      <ScanButton onScan={handleScan} loading={loading} />
      {loading ? <p>Loading...</p> : <p>{result}</p>}
    </>
  );
}

export default App;
