import React, { useState } from "react";
import names from "./BabyNamesData.js";

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((el) => el.name.includes(query));
};
const SearchBar = () => {
  const [query, setQuery] = useState("");
  names.sort(function (a, b) {
    names.sort((a, b) => {
      return a.name - b.name;
    });
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const sortedNames = getFilteredItems(query, names);
  return (
    <div className="container-fluid">
      <input
        type="text"
        placeholder="Search for a name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {sortedNames.map(({ name, sex }) => (
          <li
            key={name}
            style={{
              backgroundColor: sex === "f" ? "#FFC6E5" : "#A0CFEE",
              color: sex === "f" ? "red" : "blue",
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

