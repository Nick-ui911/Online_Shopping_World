export function filterData(searchtxt,data) {
    const filter = data.filter((nick) => {
      // this question mark will handle if name were in deep nested property , it will get name from there,basically it is good practice;
      return nick.name?.toLowerCase()?.includes(searchtxt.toLowerCase());
    });
    return filter;
  }