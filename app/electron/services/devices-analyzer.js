import knownListofDevices from "../data/devices.json" with { type: "json" };

const analyzeDevices = (devices) => {
  const knownDevice = knownListofDevices.find((knownDevice) => {
    return knownDevice.mac.toLowerCase() === devices.mac.toLowerCase();
  });

  return {
    ...knownDevice,
    ip: devices.ip,
    mac: devices.mac,
    name: knownDevice ? knownDevice.name : "Unknown Device",
    known: Boolean(knownDevice),
  };
};

const analyze = (devices) => {
  const data = devices.map(analyzeDevices);
  return data;
};

export default analyze;
