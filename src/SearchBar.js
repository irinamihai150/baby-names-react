import React, { useState } from "react";
import names from "./BabyNamesData.js";

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((el) => el.name.includes(query));
};
const searchBar = () => {
  const [query, setQuery] = useState("");
  let { names } = names;
  let { items } = names;
  const filteredItems = getFilteredItems(query, items);
  return (
    <div>
      <label> Search</label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((value) => (
          <li key={value.name}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default searchBar;

// let filteredBabies = names.filter((el) => {
//   return el.name.toLowerCase();
// });
// const handleChange = (name) => {
//   name.preventDefault();
//   setSearchInput(name.target.value);
// };

// if (searchInput.length > 0) {
//   filteredBabies.filter((el) => {
//     return el.name.match(searchInput);
//   });
// return (
//   <div>
//     <input
//       type="text"
//       placeholder="Search here"
//       onChange={handleChange}
//       value={searchInput}
//     />
//     <ul>
//       {filteredBabies.map((baby) => {
//         <li>{baby.index}</li>;
//       })}
//     </ul>
//   </div>
// );

// const getFilteredItems = (query, items) => {
//   if (!query) {
//     return items;
//   }
//   return items.filter((el) => el.name.includes(query));
// };
// const searchBar = () => {
//   const [query, setQuery] = useState("");
//   let { names } = names;
//   let { items } = babynames;
//   const filteredItems = getFilteredItems(query, items);
//   return (
//     <div>
//       <label> Search</label>
//       <input type="text" onChange={(e) => setQuery(e.target.value)} />
//       <ul>
//         {filteredItems.map((value) => (
//           <li key={value.name}>{value.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
