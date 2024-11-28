import { Boxes } from "../models/Boxes";

export async function fetchSushiBoxes(): Promise<Boxes[]> {
  try {
    const response = await fetch("../../public/data/boxes.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Boxes[] = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des boxes sushi :", error);
    throw error;
  }
}
