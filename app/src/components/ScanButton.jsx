const ScanButton = ({ onScan, loading }) => {
  return (
    <button onClick={onScan} disabled={loading}>
      {loading ? "SCANNING" : "SCAN"}
    </button>
  );
};

export default ScanButton;
