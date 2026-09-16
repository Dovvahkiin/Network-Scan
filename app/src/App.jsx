import useScan from "./hooks/useScan.js";
import Table from "./components/tablePreview.jsx";
import ScanButton from "./components/ScanButton.jsx";
import "./styles/components.css";
function App() {
  const { handleScan, loading, result } = useScan();

  return (
    <main className="mainApp">
      <h1>DEMO NETWORK SCANNER</h1>

      <div className="buttonSection">
        {loading ? (
          <p className="loading">Scanning...</p>
        ) : (
          <span>Press SCAN button to start scanning your network</span>
        )}
        <ScanButton onScan={handleScan} loading={loading} />
      </div>

      {result && <Table devices={result} />}
    </main>
  );
}

export default App;
