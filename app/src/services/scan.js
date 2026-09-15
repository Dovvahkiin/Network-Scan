const scan = async () => {
  const result = await window.electronAPI.scanNetwork();
  return result;
};

export default scan;
