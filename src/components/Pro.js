import React from "react";

function Pro() {
  return (
    <div
      style={{
        height: "70%",
        width: "70%",
        paddingTop: 10,
      }}
    >
      <div style={{ color: "white", fontWeight: 600, textAlign: "left" }}>
        Go Pro
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
        Upgrade yor plans to get pro benefits
      </div>
      <br></br>
      <br />
      <div style={{ display: "flex", alignContent: "right" }}>
        <button
          style={{
            padding: 8,
            backgroundColor: "black",
            color: "white",
            borderRadius: "50px 0px 50px 50px",
            borderWidth: 0,
            fontSize: 9,
            marginLeft: "auto",
          }}
        >
          Let's start
        </button>
      </div>
    </div>
  );
}

export default Pro;
