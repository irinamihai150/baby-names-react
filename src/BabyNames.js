import React from "react";
import names from "./BabyNamesData.js";
import data from "./data.json";

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
        {sortedNames.map(({ id, name }, key) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BabyList;
// if sex ==== "f" :background color:pink
// else if sex === "m" :background color to blue