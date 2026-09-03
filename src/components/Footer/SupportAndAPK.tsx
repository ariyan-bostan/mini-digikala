import { useContext } from "react";
import { contextWidth } from "../App";
import APK from "./APK";
import ButtonTop from "./ButtonTop";
import Support from "./Support";

const SupportAndAPK = () => {
  const property = useContext(contextWidth)!;
  return (
    <div
      className={["container  w-100 d-flex",
        property.innerWidth < 850
          ? "flex-column p-0"
          : "flex-row-reverse",
      ].join(" ")}
    >
      <ButtonTop />
      <div className={[property.innerWidth<850?"w-100":"w-50","support d-flex flex-column"].join(" ")}>
        <Support />
        {property.innerWidth<850&& <APK />}
      </div>
    </div>
  );
};

export default SupportAndAPK;
