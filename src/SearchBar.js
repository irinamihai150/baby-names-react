import React, { useState } from "react";
import names from "./BabyNamesData.js";
import Button from "./Button.js";

const getFilteredItems = (query, items, gender) => {
  return items.filter(
    (el) =>
      (!query || el.name.includes(query)) && (!gender || el.sex === gender)
  );
};
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [gender, setgender] = useState("");
  const [favorites, setFavorites] = useState(names);
  const sortedNames = getFilteredItems(query, favorites, gender);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });
    setFavorites(newFavorites);
  }

  sortedNames.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log(gender);

  return (
    <div className="container-fluid">
      <input
        type="text"
        placeholder="Search for a name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button gender={gender} setGender={setgender} />
      <h1>Favorites List:</h1>
      <div>
        <ul>
          {favorites.map((item) =>
            item.favorite === true ? (
              <li
                onClick={() => handleFavorite(item.id)}
                key={item.id}
                style={{
                  backgroundColor: item.sex === "f" ? "#FFC6E5" : "#A0CFEE",
                  color: item.sex === "f" ? "red" : "blue",
                }}
              >
                {item.name}
              </li>
            ) : null
          )}
        </ul>
      </div>
      <ul>
        {sortedNames.map(({ name, sex, id, favorite }) =>
          favorite == null || favorite === false ? (
            <li
              onClick={() => handleFavorite(id)}
              key={name}
              style={{
                backgroundColor: sex === "f" ? "#FFC6E5" : "#A0CFEE",
                color: sex === "f" ? "red" : "blue",
              }}
            >
              {name}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
