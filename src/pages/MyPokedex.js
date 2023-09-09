import React, { useState } from "react";
import { useModal, useMyPokedex, usePokedex } from "../hooks";
import PokedexList from "../components/pokedex/PokedexList";
import SearchModal from "../components/pokedex/SearchModal";
import { calculatePokedexData } from "../utils/pokedexCalculation";

import styles from "../styles/MyPokedex.module.css";

const MyPokedex = () => {
  const [query, setQuery] = useState("");
  const [newPokemon, setNewPokemon] = useState(null);

  const { myPokedex, removePokemon } = useMyPokedex(newPokemon);
  const { pokedexList, error } = usePokedex(query, myPokedex);
  const { isModalOpen, openModal, closeModal } = useModal();

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      className={styles.container}
      style={{ overflowY: isModalOpen ? "hidden" : "auto" }}
    >
      {isModalOpen && (
        <SearchModal
          calculatePokedexData={calculatePokedexData}
          closeModal={closeModal}
          handleSearch={handleSearch}
          query={query}
          pokedexList={pokedexList}
          onClickHoverButton={setNewPokemon}
        />
      )}

      <div className={styles.pageTitle}>
        <h1>My Pokedex</h1>
      </div>

      <div className={styles.cardContainer}>
        <PokedexList
          pokedexList={myPokedex}
          calculatePokedexData={calculatePokedexData}
          isOneColumn={false}
          hoverButtonName="X"
          onClickHoverButton={removePokemon}
        />
      </div>

      <div style={{ height: "10vh", position: "sticky", bottom: 0 }}>
        <div className={styles.bottomPlusCircle} onClick={openModal}>
          <p className={styles.bottomPlus}>+</p>
        </div>
        <div className={styles.bottomDiv} />
      </div>
    </div>
  );
};

export default MyPokedex;
