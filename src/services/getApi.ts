const getApiInfo = async (url: string) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export { getApiInfo };
