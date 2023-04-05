import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ProjectDetails() {
  return (
    <div style={{ height: "70%", width: "70%" }}>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "white", marginBottom: 10 }}>Project Details</div>
        <div>
          <MoreVertIcon />
        </div>
      </div>

      <div
        style={{
          color: "#fe525c",
          fontWeight: 500,
          textAlign: "left",
          marginBottom: 10,
        }}
      >
        Himshikhar
      </div>
      <div
        style={{
          color: "white",
          fontWeight: 400,
          fontSize: 10,
          textAlign: "left",
          marginBottom: 20,
        }}
      >
        UI/UX Designer
      </div>
      <div style={{ color: "white", marginBottom: 10 }}>Project Progress</div>
      <div>
        <div>
          <div style={{ color: "white", textAlign: "right", marginBottom: 10 }}>
            75%
          </div>
          <LinearProgress width={60} variant="determinate" value={75} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
