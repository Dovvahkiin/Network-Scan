import "../styles/components.css";

const ScanButton = ({ onScan, loading }) => {
  return (
    <button className="scanBtn" onClick={onScan} disabled={loading}>
      {loading ? "SCANNING" : "SCAN"}
    </button>
  );
};

export default ScanButton;
