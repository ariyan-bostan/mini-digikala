import React, { useState } from "react";
import UserNormal from "./Users/UserNormal";
interface TypeGetItem{
    "type-user":string
}
const Profile = () => {
  const getUser:TypeGetItem=JSON.parse(localStorage.getItem("getUser")||"null")
    console.log(getUser["type-user"]);
    
  return (
    <div className="w-100">
      <UserNormal />
    </div>
  );
};

export default Profile;
