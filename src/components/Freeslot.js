import React from "react";
import "./freeslot.css";
import Switch from "@mui/material/Switch";

function Freeslot() {
  return (
    <div className="freeslot">
      <div class="slots">
        <div class="grid1"> Free Slots Available</div>
        <div class="grid2">
          <div className="date">12</div>
          <div className="month">June</div>
        </div>
        <div class="grid3">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
        <div class="grid4">
          <div className="date">12</div>
          <div className="month">June</div>
        </div>
        <div class="grid5">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
        <div class="grid6">
          <Switch defaultUnChecked size="small" />
        </div>
        <div class="grid7">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
        <div class="grid8">
          <div className="date">12</div>
          <div className="month">June</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Freeslot;
