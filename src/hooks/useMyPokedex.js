import { useEffect, useState } from "react";

const useMyPokedex = (pokemon) => {
  const [myPokedex, setMyPokedex] = useState([]);

  const removePokemon = (removeName) => {
    setMyPokedex(myPokedex.filter((item) => item.name === removeName));
  };

  useEffect(() => {
    if (pokemon !== null) {
      setMyPokedex((prevData) => {
        return [...new Set([...prevData, pokemon])];
      });
    }
  }, [pokemon]);

  return {
    myPokedex,
    removePokemon,
  };
};

export default useMyPokedex;
