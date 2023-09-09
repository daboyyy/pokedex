import React from "react";
import cuteImage from "../../assets/happiness-icon.png";

import styles from "../../styles/PokedexList.module.css";

function HappinessLevelList({ count }) {
  const happinessList = [];

  for (let i = 0; i < count; i++) {
    if (i > 4) break;
    happinessList.push(
      <img
        className={styles.happinessImg}
        src={cuteImage}
        alt={`Happiness ${i}`}
        key={i}
      />
    );
  }

  return <div style={{ display: "flex" }}>{happinessList}</div>;
}

export default HappinessLevelList;
