import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProjectProgress() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "80%",
      }}
    >
      <div
        style={{
          color: "white",
          marginBottom: 35,
          display: "flex",
          alignContent: "space-between",
        }}
      >
        <div>Project Progress</div>
        <div>
          <MoreVertIcon />
        </div>
      </div>
      <div
        style={{
          height: "50%",
          width: "50%",
        }}
      >
        <CircularProgressbarWithChildren
          background="true"
          circleRatio={0.75}
          value={100}
          maxValue={100}
          styles={buildStyles({ backgroundColor: "#292929" })}
        >
          <div
            style={{
              borderRadius: "100%",
              backgroundColor: "#fe535e",
              color: "white",
              padding: "12px 8px 12px 8px",
            }}
          >
            75%
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div style={{ color: "white", fontWeight: 200, fontSize: 10 }}>
        3 remaining projects
      </div>
    </div>
  );
}

export default ProjectProgress;
