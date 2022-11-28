import React, { useState } from "react";
import names from "./BabyNamesData";
const Button = () => {
  const [gender, setgender] = useState();
  const handlegender = (baby) => {
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
        gender.map((baby) => {
          return {
            name: names.sex,
          };
        })
      );
    }
    // setgender(e.target.value);
  };
  return (
    <div onChange={handlegender} className="button-container">
      <button name="gender" className="checked" type="radio">
        <i class="fa-solid fa-user" id="girl"></i>
      </button>
      <button name="gender" className="checked" type="radio">
        <i class="fa-solid fa-user" id="boy"></i>
      </button>
      <button name="gender" className="checked" type="radio">
        <i class="fa-solid fa-user" id="mix"></i>
      </button>
    </div>
  );
};
export default Button;

// <label className="button-container">
//       {" "}
//       <i class="fa-solid fa-user" id="girl"></i>
//     </label>
//     <input type="radio" name="gender" value="male" onChange={handlegender} />
//     <label htmlFor="">
//       <i class="fa-solid fa-user" id="boy"></i>
//     </label>
//     <input
//       type="radio"
//       name="gender"
//       value="Female"
//       onChange={handlegender}
//     />
//     <label htmlFor="">
//       <i class="fa-solid fa-user" id="mix"></i>
//     </label>
//     <input type="radio" name="gender" value="mix" onChange={handlegender} />
