import { useEffect, useState } from "react";
import axios from "axios";

const usePokedex = (query, myPokedex) => {
  const [pokedexList, setPokedexList] = useState([]);
  const [error, setError] = useState(false);

  const excludeFromMyPokedex = (pokedexList, myPokedex) => {
    return pokedexList.filter(
      (item1) => !myPokedex.some((item2) => item1.name === item2.name)
    );
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3030/api/cards",
      params: query !== "" ? { name: query, limit: 10 } : { limit: 10 },
    })
      .then((res) => {
        setPokedexList(excludeFromMyPokedex(res.data.cards, myPokedex));
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
  }, [query, myPokedex]);

  return {
    pokedexList,
    error,
  };
};

export default usePokedex;
