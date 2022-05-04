export const getJSON = async function (url: string) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
