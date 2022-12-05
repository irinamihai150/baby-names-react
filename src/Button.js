import React from "react";
import names from "./BabyNamesData";
const Button = ({ gender, setGender }) => {
  const handlegender = (gender) => {
    console.log(gender);
    setGender(gender);
  };
  return (
    <div className="button-container">
      <button
        onClick={() => handlegender("f")}
        name="gender"
        className="checked"
      >
        <i class="fa-solid fa-user" id="girl"></i>
      </button>
      <button
        onClick={() => handlegender("m")}
        name="gender"
        className="checked"
      >
        <i class="fa-solid fa-user" id="boy"></i>
      </button>
      <button
        onClick={() => handlegender("")}
        name="gender"
        className="checked"
      >
        <i class="fa-solid fa-user" id="mix"></i>
      </button>
    </div>
  );
};
export default Button;
