import React from "react";
import names from "./BabyNamesData.js";


function BabyList() {
  let sortedNames = names.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
  return (
    <div className="container-fluid">
      <ul>
        {sortedNames.map(({ name, sex }) => (
          <li style={{ backgroundColor: sex === "f" ? "#FFC6E5" : "#A0CFEE", color:sex ==="f" ? "red":"blue" }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BabyList;
