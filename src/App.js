import "./App.css";
import React, { useState } from "react";
import BabyList from "./BabyNames";
import SearchBar from "./SearchBar";

function App() {
   const [inputText, setInputText] = useState("");
   let inputHandler = (e) => {
     let lowerCase = e.target.value.toLowerCase();
     setInputText(lowerCase);
   };
  return (
    <div className="container">
      <SearchBar onChange={inputHandler} />
      <BabyList input={inputText} />
    </div>
  );
}

export default App;
