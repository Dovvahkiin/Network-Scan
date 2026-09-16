import "../styles/components.css";

const Table = ({ devices }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>IP Address</th>
          <th>MAC Address</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {devices.map((device) => (
          <tr key={device.mac}>
            <td>{device.name}</td>
            <td>{device.ip}</td>
            <td>{device.mac}</td>
            <td>
              {device.known ? (
                <span style={{ color: "Lime" }}>Known</span>
              ) : (
                <span style={{ color: "red" }}>Unknown</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
