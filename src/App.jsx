import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
