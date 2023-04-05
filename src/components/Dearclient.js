import React from "react";
import feather from "./feather.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Dearclient() {
  return (
    <div style={{ width: "80%", height: "80%", display: "flex" }}>
      <div
        style={{
          display: "flex",
          columnGap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ height: 120, width: 80 }}>
          <img src={feather} alt="feather" />
        </div>
        <div>
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            Dear Client
          </div>
          <div
            style={{
              color: "white",
              fontWeight: 200,
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            Join our online community. It helps u a lot to manage projects.
          </div>
        </div>
        <div>
          <ExpandMoreIcon fontSize="medium" sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
}

export default Dearclient;
