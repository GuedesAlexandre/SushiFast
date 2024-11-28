import { Food } from "./Food";

export interface Boxes {
  id: string;
  nom: string;
  pieces: number;
  prix: number;
  image: string;
  aliments: Food[];
  saveurs: string[];
}
