import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value;
    query.trim() === ""
      ? toast.error("Input can not be empty!")
      : onSearch(query);
    event.target.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchBtn} type="submit">
          <BsSearch className={css.searchIcon} />
        </button>
        <input
          className={css.input}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
