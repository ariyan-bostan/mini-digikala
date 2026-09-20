import React, { useContext, useState } from "react";
import LogoInputs from "./LogoInputs";
import { useNavigate } from "react-router";
import { contextWidth } from "../../../App";
import SignupInput from "./SignupInputs";
import type { UserNormal } from "../../../Hooks/useGetListNormalUser";
interface ContextUserNormal {
  newPerson: UserNormal;
  setNewPerson: (item: UserNormal) => void;
}
export const contextUserNormal = React.createContext<
  ContextUserNormal | undefined
>(undefined);
const Signup = () => {
  const navigate = useNavigate();
  const property = useContext(contextWidth)!;
  const [newPerson, setNewPerson] = useState<UserNormal>({
    "id-user": "",
    "type-user": "",
    "number-phone": "",
    name: "",
    "last-name": "",
    "user-name": "",
    password: "",
    "box-product": [],
  });

  return (
    <contextUserNormal.Provider value={{ newPerson, setNewPerson }}>
      <div
        className={[
          "w-100",
          "d-flex flex-column align-items-center gap-3",
        ].join(" ")}>
        <LogoInputs />
        <div
          className={[
            property.innerWidth < 850
              ? "w-75  border p-4 rounded-4"
              : "w-50 mt-2  border p-4 rounded-4",
          ].join(" ")}>
          <SignupInput />
          <p
            onClick={() => {
              navigate("/profile/profileInput/login");
            }}
            style={{ fontSize: ".8rem" }}
            className="mt-4">
            حساب کاربری دارید؟
          </p>
        </div>
      </div>
    </contextUserNormal.Provider>
  );
};

export default Signup;
