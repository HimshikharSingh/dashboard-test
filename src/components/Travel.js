import React from "react";
import { Avatar, AvatarGroup } from "@mui/material";

const Travel = () => {
  return (
    <div style={{ height: "80%", width: "80%" }}>
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 12,
        }}
      >
        Travel
      </div>
      <div
        style={{
          color: "white",
          fontWeight: "normal",
          fontSize: 14,
          marginBottom: 12,
        }}
      >
        Mobile Application
      </div>
      <div
        style={{
          color: "white",
          fontWeight: "light",
          fontSize: 10,
          marginBottom: 12,
        }}
      >
        Seen by
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "flex-start",
          marginBottom: 12,
        }}
      >
        <AvatarGroup>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
            sx={{ width: 30, height: 30 }}
          />
        </AvatarGroup>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", columnGap: 10, rowGap: 12 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            color: "white",
            backgroundColor: "#3927ab",
            fontWeight: 400,
            fontSize: 11,
            width: "45%",
            height: 25,
          }}
        >
          Tour
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            color: "white",
            backgroundColor: "black",
            fontWeight: 400,
            fontSize: 11,
            width: "45%",
            height: 25,
          }}
        >
          Trip
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            color: "white",
            backgroundColor: "black",
            fontWeight: 400,
            fontSize: 11,
            width: "45%",
            height: 25,
          }}
        >
          Transport
        </div>
      </div>
    </div>
  );
};

export default Travel;
