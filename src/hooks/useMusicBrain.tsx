import React, { useEffect, useState } from "react";
import { MusicBrainAPI } from "../api/MusicBrainAPI";
import { Genre } from "../types/genre";

export const useMusicBrain = (limit: number, offset: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfGenres, setListOfGenres] = useState<Genre[]>([]);
  const [totalRegisters, setTotalRegisters] = useState(0);

  useEffect(() => {
    MusicBrainAPI(limit, offset).then((data) => {
      setListOfGenres(data.data.genres);
      setTotalRegisters(data.data["genre-count"]);
      setIsLoading(false);
    });
  }, [limit, offset]);

  return {
    isLoading,
    listOfGenres,
    totalRegisters,
  };
};
