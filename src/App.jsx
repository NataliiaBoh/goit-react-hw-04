import { useState } from "react";

import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // const [count, setCount] = useState(0);

  const handleSearch = () => {};

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;
