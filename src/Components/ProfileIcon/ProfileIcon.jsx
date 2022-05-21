import React from "react";
import '../ProfileIcon/PI.css'
import IconButton from "@mui/material/IconButton";
import { FaUser } from "react-icons/fa";


function ProfileIcon() {

  return (
    <div className="profileicon">
      <IconButton size="large" aria-label="profile">
        <FaUser  className="user-icon" />
      </IconButton>
    </div>
  );
}

export default ProfileIcon;
