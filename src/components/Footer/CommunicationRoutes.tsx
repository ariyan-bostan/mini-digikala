import React from "react";
import FormEmail from "./FormEmail";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

const CommunicationRoutes = () => {
  const communicationRoutes = {
    title: "همراه ما باشید!",
    linkIcon: [
      <IoLogoInstagram fontSize={40} />,
      <FaLinkedin fontSize={40} />,
      <FaTwitter fontSize={40} />,
      <SiAparat fontSize={40} />,
    ],
  };
  return (
    <div className="w-25 h-75 pt-2">
      <h2>{communicationRoutes.title}</h2>
      <div className="d-flex flex-row gap-3">
        {communicationRoutes.linkIcon.map((item, index) => (
          <>{item}</>
        ))}
      </div>
      <FormEmail />
    </div>
  );
};

export default CommunicationRoutes;
