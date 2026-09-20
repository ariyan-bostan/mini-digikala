import React, { useState } from "react";
import SignupNumber from "./SignupNumber";
import SignupFullName from "./SignupFullName";
import SignupUsername from "./SignupUsername";
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
  TypeContextStateSignupForm | undefined
>(undefined);


const SignupInput = () => {
  const [stateSignupForm, setStateSignupForm] = useState({
    numberPhone: false,
    fullName: false,
    username: false,
  });
  return (
    <>
      <contextStateSignupForm.Provider
        value={{ stateSignupForm, setStateSignupForm }}>
        {!stateSignupForm.numberPhone && <SignupNumber />}
        {stateSignupForm.numberPhone && !stateSignupForm.fullName && (
          <SignupFullName />
        )}
        {stateSignupForm.numberPhone && stateSignupForm.fullName && (
          <SignupUsername />
        )}
      </contextStateSignupForm.Provider>
    </>
  );
};

export default SignupInput;
