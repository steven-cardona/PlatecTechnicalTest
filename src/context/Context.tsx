import { createContext } from "react";
import { PropsContext } from "../types/contextProps";

export const MusicContext = createContext<PropsContext>({} as PropsContext);
