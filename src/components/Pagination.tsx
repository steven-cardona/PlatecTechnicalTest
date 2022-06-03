import React from "react";
import { useContext } from "react";
import { MusicContext } from "../context/Context";

export const Pagination = () => {
  const { totalRegisters, dataToAPI, currentPage, handleChangePage } = useContext(
    MusicContext
  );

  /**
   * Create an array with the number of each page
   *
   * @author Steven Cardona
   * @returns number[]
   */
  const renderOptions = () => {
    const pages = [];
    for (let index = 0; index < totalRegisters / dataToAPI.limit; index++) {
      pages.push(index);
    }
    return pages;
  };

  return (
    <div className="d-flex justify-content-end align-items-center">
      <p className=" fw-bold pt-2 me-2">Go to page</p>
      <select
        className="custom-select"
        name="selectNumRecords"
        id="selectNumRecords"
        value={currentPage}
        onChange={handleChangePage}>
        {renderOptions().map((page) => {
          return <option key={page + 1}>{page + 1}</option>;
        })}
      </select>
    </div>
  );
};
