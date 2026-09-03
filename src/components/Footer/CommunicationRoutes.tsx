import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { SiAparat } from "react-icons/si";
import FormEmail from "./FormEmail";
import useCommunicationRoutes from "../Hooks/useCommunicationRoutes";

const CommunicationRoutes = () => {
  const { list, error, isLoading } = useCommunicationRoutes();
  const icons = {
    linkedin: <FaLinkedin fontSize={40} />,
    instagram: <IoLogoInstagram fontSize={40} />,
    twitter: <FaTwitter fontSize={40} />,
    aparat: <SiAparat fontSize={40} />,
  };

  return (
    <div className="w-25 h-75 pt-2">
      <h2>{list?.title}</h2>
      <div className="d-flex flex-row gap-3">
        {/* {communicationRoutes.linkIcon.map((item, index) => (
          <>{item}</>
        ))} */}
        {list&&list.linkIcon.map((item, index) => (
          <>{icons[item as keyof typeof icons]}</>
        ))}
      </div>
      <FormEmail />
    </div>
  );
};

export default CommunicationRoutes;
