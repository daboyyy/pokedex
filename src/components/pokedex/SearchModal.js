import React from "react";
import PokedexList from "./PokedexList";

import searchIcon from "../../assets/search-icon.png";

import modalStyles from "../../styles/Modal.module.css";

const SearchModal = ({
  calculatePokedexData,
  closeModal,
  handleSearch,
  query,
  pokedexList,
  onClickHoverButton,
}) => {
  return (
    <div className={modalStyles.stickyModal}>
      <div className={modalStyles.modalOverlay} onClick={closeModal}>
        <div className={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={modalStyles.inputContainer}>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              className={modalStyles.inputField}
              placeholder="Find Pokemon"
            />
            <img
              className={modalStyles.icon}
              src={searchIcon}
              alt="search icon"
            />
          </div>
          <PokedexList
            pokedexList={pokedexList}
            calculatePokedexData={calculatePokedexData}
            onClickHoverButton={onClickHoverButton}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
