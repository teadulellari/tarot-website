import { createContext } from "react";
import { TextDB } from "../../Types";
import textData from '../../data/language.json';

export const TextDBContext = createContext<TextDB>(textData["al"]);