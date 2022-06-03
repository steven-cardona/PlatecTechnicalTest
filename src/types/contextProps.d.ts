import { DataToAPI } from "./dataToAPII";

export type PropsContext = {
  dataToAPI: DataToAPI;
  isLoading: boolean;
  listOfGenres: Array<Genre>;
  totalRegisters: number;
  currentPage: number;
  handleChangePage(event: ChangeEvent<HTMLSelectElement>): void;
  handleNumRecords(event: ChangeEvent<HTMLSelectElement>): void;
};
