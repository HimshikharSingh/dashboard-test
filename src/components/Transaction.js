import React from "react";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Transaction = () => {
  return (
    <div style={{ height: "80%", width: "90%" }}>
      <div style={{ display: "flex", color: "white" }}>
        <div style={{ width: "100%" }}>
          <div style={{ fontWeight: 500, marginBottom: 10 }}>
            Transaction Details
          </div>
          <div style={{ fontWeight: 300, fontSize: 14, marginBottom: 10 }}>
            Hi Himshikhar
          </div>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 60, height: 60 }}
          />
        </div>
      </div>
      <div style={{ display: "flex", color: "white", alignItems: "center" }}>
        <div style={{ width: "90%" }}>
          <div style={{ fontWeight: 500, fontSize: 17, marginBottom: 10 }}>
            $12,345
          </div>
          <div style={{ fontWeight: 200, fontSize: 10, marginBottom: 10 }}>
            Available Balance
          </div>
        </div>
        <div style={{ display: "flex", width: "20%", justifyContent: "right" }}>
          **** 3124
        </div>
      </div>
      <div>
        <Stack direction="row" spacing={3}>
          <Avatar
            sx={{ bgcolor: "black", width: 30, height: 30, fontSize: "small" }}
          >
            <ArrowForwardRoundedIcon />
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/4.jpg"
            sx={{ width: 30, height: 30 }}
          />
        </Stack>
      </div>
      <div style={{ marginTop: 10, display: "flex", justifyContent: "right" }}>
        <button
          style={{
            borderRadius: 15,
            height: 30,
            width: 80,
            padding: "4px 8px 4px 8px",
            backgroundColor: "#ff5360",
            border: 0,
            color: "white",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Transaction;
