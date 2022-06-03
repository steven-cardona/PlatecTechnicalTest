import React, { useContext } from "react";
import { MusicContext } from "../../context/Context";
import { SelectNumberRecords } from "./SelectNumberRecords";

export const FilterBar = () => {
  const { totalRegisters, dataToAPI, isLoading } = useContext(MusicContext);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <SelectNumberRecords />

      {isLoading && (
        <div className="d-flex align-items-center">
          <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      )}

      {!isLoading && (
        <p className="text-muted">
          {dataToAPI.offset + 1} -{" "}
          {dataToAPI.limit + dataToAPI.offset > totalRegisters
            ? totalRegisters
            : dataToAPI.limit + dataToAPI.offset}{" "}
          of {totalRegisters} Records
        </p>
      )}
    </div>
  );
};
