import React from "react";

function Header() {
  return (
    <div style={{ height: "60%", width: "60%" }}>
      <div style={{ color: "#fe525c", fontWeight: 500, textAlign: "left" }}>
        Himshikhar
      </div>
      <br></br>
      <div
        style={{
          color: "white",
          fontWeight: 400,
          fontSize: 10,
          textAlign: "left",
        }}
      >
        UI/UX Designer
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ alignContent: "flex-start" }}>
          <div
            style={{
              color: "white",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "left",
            }}
          >
            125
          </div>
          <br />
          <div
            style={{
              color: "white",
              fontWeight: 400,
              fontSize: 9,
              textAlign: "left",
            }}
          >
            Projects
          </div>
        </div>
        <div style={{ alignContent: "flex-end" }}>
          <div
            style={{
              color: "white",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "left",
            }}
          >
            $127
          </div>
          <br />
          <div
            style={{
              color: "white",
              fontWeight: 400,
              fontSize: 9,
              textAlign: "left",
            }}
          >
            Revenue
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
