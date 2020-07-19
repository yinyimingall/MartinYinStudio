import React, { useState } from "react";
import Style from "./style/assistant.module.scss";
const Assistant = () => {
  const [isOpen, setOpen] = useState(false);

  const openAssistant = () => {
    setOpen(true);
  };
  return (
    <div
      className={isOpen ? Style.entrance + " " + Style.open : Style.entrance}
      onClick={openAssistant}
    >
      
    </div>
  );
};

export default Assistant;
