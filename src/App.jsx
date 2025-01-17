import { useEffect, useRef, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import getPhotos from "./components/unsplash-api-fetch";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

const modalInitialParams = {
  isOpen: false,
  url: "",
  description: "",
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [modalParams, setModalParams] = useState(modalInitialParams);

  const appRef = useRef();

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await getPhotos(searchQuery, page);
        setImages((prevImages) => {
          return [...prevImages, ...results];
        });
        setShowLoadMoreBtn(total_pages && total_pages !== page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = (url, description) => {
    setModalParams({ isOpen: true, url, description });
  };

  const handleModalClose = () => {
    setModalParams(modalInitialParams);
  };

  useEffect(() => {
    if (page === 1) return;

    appRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [images, page]);

  return (
    <div ref={appRef}>
      <SearchBar onSearch={handleSearch} />

      {isError && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}

      {images.length > 0 && !isLoading && showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}

      {isLoading && <Loader />}
      {modalParams && (
        <ImageModal
          url={modalParams.url}
          description={modalParams.description}
          isOpen={modalParams.isOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
