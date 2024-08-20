import React, { useState } from "react";
import Hmenu from "./menu/Hmenu";
import Vmenu from "./menu/Vmenu";


const UseStateComponent = () => {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(true);
  }
  function handleVmenu() {
    setActive(false);
  }

  return (
    <div>
      <button onClick={handleClick}></button>
      <button onClick={handleVmenu}></button>
      {active ? <Hmenu /> : <Vmenu />}
    </div>
  );
};

export default UseStateComponent;
