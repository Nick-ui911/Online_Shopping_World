export function filterData(searchtxt, data) {
  if (!Array.isArray(data)) {
    console.error("filterData: Provided data is not an array", data);
    return []; // Return an empty array to prevent errors
  }

  return data.filter((nick) =>
    nick?.name?.toLowerCase().includes(searchtxt.toLowerCase())
  );
}
