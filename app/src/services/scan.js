const scan = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const result = await window.electronAPI.scanNetwork();
  return result;
};

export default scan;
