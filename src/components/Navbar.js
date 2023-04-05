import React from "react";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import "./navbar.css";

function Navbar() {
  return (
    <div
      style={{
        height: "95%",
        width: "95%",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="list">
        <div className="folder-icon">
          <FolderOpenOutlinedIcon fontSize="small" />
        </div>
        <div className="text">Dashboard</div>
      </div>
      <div className="list">
        <div className="folder-icon">
          <MailOutlineRoundedIcon fontSize="small" />
        </div>
        <div className="text">E-mailr</div>
      </div>
      <div className="list">
        <div className="folder-icon">
          <FolderOpenOutlinedIcon fontSize="small" />
        </div>
        <div className="text">Calendar</div>
      </div>
      <div className="list">
        <div className="folder-icon">
          <FolderOpenOutlinedIcon fontSize="small" />
        </div>
        <div className="text">Graph</div>
      </div>
      <div className="list">
        <div className="folder-icon">
          <FolderOpenOutlinedIcon fontSize="small" />
        </div>
        <div className="text">Form</div>
      </div>
    </div>
  );
}

export default Navbar;
