import React, { useState } from "react";
import names from "./BabyNamesData";
const Button = () => {
  const [gender, setgender] = useState();
  const handlegender = () => {
    if (gender === "f") {
      setgender(
        gender.map((names) => {
          return {
            name: names.name,
          };
        })
      );
    }
    if (gender === "m") {
      setgender(
        gender.map(() => {
          return {
            name: names.sex,
          };
        })
      );
    }


// const newObj = {};
// for (const [key, value] of Object.entries(names)) {
//   if (typeof value === "string") {
//     newObj[key] = value;
//   }
// }
    // setgender(e.target.value);
  };
  return (
    <div className="button-container">
      <button
        onChange={handlegender}
        name="gender"
        className="checked"
        type="radio"
      >
        <i class="fa-solid fa-user" id="girl"></i>
      </button>
      <button
        onChange={handlegender}
        name="gender"
        className="checked"
        type="radio"
      >
        <i class="fa-solid fa-user" id="boy"></i>
      </button>
      <button
        onChange={handlegender}
        name="gender"
        className="checked"
        type="radio"
      >
        <i class="fa-solid fa-user" id="mix"></i>
      </button>
    </div>
  );
};
export default Button;