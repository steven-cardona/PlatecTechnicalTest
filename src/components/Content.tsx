import React from "react";
import { FilterBar } from "./filterBar/FilterBar";
import { Pagination } from "./Pagination";
import Table from "./table/Table";

export const Content = () => {
  return (
    <div className="p-3">
      <FilterBar />
      <Table />
      <Pagination />
    </div>
  );
};
