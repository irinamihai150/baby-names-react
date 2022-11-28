import React, { useState, useEffect } from "react";
import names from "./BabyNamesData.js";

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((el) => el.name.includes(query));
};
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState("");
  useEffect(() => {
    setFavorites(names);
  }, []);
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  // function handleFavorite(id) {
  //   const newFavorites = favorites.map((item) => {
  //     return item.id === id ? { ...item, favorite: !item.favorite } : item;
  //   });
  //   setFavorites(newFavorites);
  // }


  names.sort(function (a, b) {
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
      <h1>Favorites List:</h1>
      {/* <div>
        <ul>
          {favorites.map((item) =>
            item.favorite === true ? <li key={item.id}>{item.name}</li> : null
          )}
        </ul>
      </div> */}
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
