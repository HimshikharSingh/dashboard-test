import React from "react";
import "./revenue.css";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import LinearProgress from "@mui/material/LinearProgress";

function Revenue() {
  return (
    <div className="revenue">
      <div className="dolar">
        <AttachMoneyRoundedIcon />
      </div>
      <div className="items">
        <div className="total">Total Revenue</div>
        <div className="amnt">$1234</div>
        <div className="bar">
          <LinearProgress variant="determinate" value={60}></LinearProgress>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
