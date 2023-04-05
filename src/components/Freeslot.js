import React from "react";
import "./freeslot.css";
import Switch from "@mui/material/Switch";

function Freeslot() {
  return (
    <div className="freeslot">
      <div className="slots">
        <div className="grid1"> Free Slots Available</div>
        <div className="grid2">
          <div className="date">12</div>
          <div className="month">June</div>
        </div>
        <div className="grid3">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
        <div className="grid4">
          <div className="date">12</div>
          <div className="month">June</div>
        </div>
        <div className="grid5">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
        <div className="grid6">
          <Switch defaultChecked={false} size="small" />
        </div>
        <div className="grid7">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
        <div className="grid8">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Freeslot;
