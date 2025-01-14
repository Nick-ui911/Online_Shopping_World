import React from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const Fitness = () => {
  const onlinecheck = useOnline();
  if (!onlinecheck)  {   
    return (
      <Offline/>
    )
  };
  return (
   <div> fitness equipment </div>
  );
};

export default Fitness;
