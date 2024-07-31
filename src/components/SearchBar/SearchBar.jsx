import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

export default function searchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value;
    query.trim() === ``
      ? toast.error(`Input can not be empty!`)
      : onSearch(query);
    event.target.reset();
  };
  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          name="searchName"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        {/* <button type="submit">Search</button> */}
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
