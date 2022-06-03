import { Genre } from "./genre";

export type responseAPI = {
  "genre-offset": number,
  "genres": Array<Genre>
  "genre-count":number
}