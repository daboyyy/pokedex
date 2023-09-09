import React from "react";
import HappinessLevelList from "./HappinessLevelList";

import styles from "../../styles/PokedexList.module.css";

const PokedexList = ({
  pokedexList,
  calculatePokedexData,
  isOneColumn = true,
  hoverButtonName = "Add",
  onClickHoverButton,
}) => {
  return pokedexList.map((pokemon, index) => {
    const { hpLevel, atkLevel, weakLevel, happinessLevel } =
      calculatePokedexData(pokemon);

    return (
      <div
        className={styles.card}
        key={index}
        style={{
          gridTemplateColumns: isOneColumn && "20% 80%",
          marginBottom: isOneColumn && "3vh",
        }}
      >
        <img
          className={styles.pokemonImg}
          src={pokemon.imageUrl}
          alt={pokemon.name}
        />
        <div className={styles.descContainer}>
          <div
            className={styles.hoverButton}
            onClick={() => onClickHoverButton(pokemon)}
          >
            <p>{hoverButtonName}</p>
          </div>
          <p className={styles.name}>{pokemon.name.toUpperCase()}</p>

          <PokedexStatus
            status="HP"
            progress={hpLevel}
            isOneColumn={isOneColumn}
          />
          <PokedexStatus
            status="STR"
            progress={atkLevel}
            isOneColumn={isOneColumn}
          />
          <PokedexStatus
            status="WEAK"
            progress={weakLevel}
            isOneColumn={isOneColumn}
          />

          <HappinessLevelList count={happinessLevel} />
        </div>
      </div>
    );
  });
};

const PokedexStatus = ({ status, progress, isOneColumn }) => {
  return (
    <div className={styles.statusContainer}>
      <p>{status}</p>
      <div
        className={styles.progressBar}
        style={{ width: isOneColumn && "30vw" }}
      >
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default PokedexList;
