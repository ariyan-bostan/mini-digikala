import React, { useContext, useEffect, useState } from "react";
import SignupNumber from "./SignupNumber";
import SignupFullName from "./SignupFullName";
import SignupUsername from "./SignupUsername";
import { contextUserNormal } from "./Signup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import type { UserNormal } from "../../../Hooks/useGetListNormalUser";
interface TypeStateSignupForm {
  numberPhone: boolean;
  fullName: boolean;
  username: boolean;
}
interface TypeContextStateSignupForm {
  stateSignupForm: TypeStateSignupForm;
  setStateSignupForm: (item: TypeStateSignupForm) => void;
}
export const contextStateSignupForm = React.createContext<
  TypeContextStateSignupForm | undefined>(undefined);

const SignupInput = () => {
  const person = useContext(contextUserNormal)!;
  const navigate = useNavigate();

  const [stateSignupForm, setStateSignupForm] = useState({
    numberPhone: false,
    fullName: false,
    username: false,
  });
  if (
    stateSignupForm.numberPhone &&
    stateSignupForm.fullName &&
    stateSignupForm.username
  ) {
    console.log(person.newPerson);

    localStorage.setItem("getUser", JSON.stringify({id:person.newPerson["id-user"],type:person.newPerson["type-user"]}));
  
    Swal.fire({
      title: `خوش امدید ${person.newPerson.name}`,
      icon: "success",
    });
    navigate("/");
  }
  return (
    <>
      <contextStateSignupForm.Provider
        value={{ stateSignupForm, setStateSignupForm }}>
        {!stateSignupForm.numberPhone && <SignupNumber />}
        {stateSignupForm.numberPhone && !stateSignupForm.fullName && (
          <SignupFullName />
        )}
        {stateSignupForm.numberPhone &&
          stateSignupForm.fullName &&
          !stateSignupForm.username && <SignupUsername />}
      </contextStateSignupForm.Provider>
    </>
  );
};

export default SignupInput;
