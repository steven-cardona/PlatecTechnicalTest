import React from "react";
import { useContext } from "react";
import { MusicContext } from "../../context/Context";

export const SelectNumberRecords = () => {
  const { dataToAPI, handleNumRecords } = useContext(MusicContext);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="fw-bold pt-2 me-2">
        <p>Number of records</p>
      </div>

      <select
        className="custom-select"
        name="selectNumRecords"
        id="selectNumRecords"
        value={dataToAPI.limit}
        onChange={handleNumRecords}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};
