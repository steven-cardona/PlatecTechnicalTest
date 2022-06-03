import axios from "axios";
import { responseAPI } from "../types/responseAPI";

/**
 * Get the data from the api
 *
 * @author Steven Cardona
 * @param limit
 * @param offset
 * @returns Promise<AxiosResponse<responseAPI, any>>
 */
export const MusicBrainAPI = (limit: number, offset: number) => {
  return axios.get<responseAPI>(
    `https://musicbrainz.org/ws/2/genre/all?limit=${limit}&offset=${offset}&fmt=json`
  );
};
