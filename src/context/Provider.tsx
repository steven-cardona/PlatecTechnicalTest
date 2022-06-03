import React, { useState } from "react";
import { useMusicBrain } from "../hooks/useMusicBrain";
import { DataToAPI } from "../types/dataToAPI";
import { ProviderProps } from "../types/providerProps.d";
import { MusicContext } from "./Context";

export const Provider = ({ children }: ProviderProps) => {
  const [dataToAPI, setDataToAPI] = useState<DataToAPI>({ limit: 10, offset: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, listOfGenres, totalRegisters } = useMusicBrain(
    dataToAPI.limit,
    dataToAPI.offset
  );

  /**
   * Update the limit of the records to show
   *
   * @author Steven Cardona
   * @param target EventTarget & HTMLSelectElement
   */
  const handleNumRecords: React.ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    setDataToAPI((prev) => ({ ...prev, limit: parseInt(target.value) }));
  };

  /**
   * Update the current page and the first of said page
   *
   * @param@author Steven Cardona target
   * @param target EventTarget & HTMLSelectElement
   */
  const handleChangePage: React.ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    const page = parseInt(target.value);
    setCurrentPage(page);
    const calcOffset = page * dataToAPI.limit - dataToAPI.limit;
    setDataToAPI((prev) => ({ ...prev, offset: calcOffset }));
  };

  return (
    <MusicContext.Provider
      value={{
        dataToAPI,
        isLoading,
        listOfGenres,
        totalRegisters,
        currentPage,
        handleChangePage,
        handleNumRecords,
      }}>
      {children}
    </MusicContext.Provider>
  );
};
