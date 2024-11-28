import { useEffect, useState } from "react";
import { fetchSushiBoxes } from "../utils/sushiApiService";
import type { Boxes as BoxesType } from "../models/Boxes";
import SushiCard from "../components/SushiCard";

const SpecificSushi = () => {
    const [boxesFiltered, setBoxesFiltered] = useState<BoxesType[] | undefined>();
    useEffect(() => {
        fetchSushiBoxes().then((data) => {
            const filteredBoxes = data.filter((box) => {
                return box.saveurs.includes("coriandre") || box.saveurs.includes("avocat");
            });
            setBoxesFiltered(filteredBoxes);
        });
    }, []);

  return (
    <>
      <div className="text-center pt-4">
        <h1 className="text-3xl font-bold text-center p-8">Sushi Boxes Coriande ou Avocat</h1>
        <p className="text-lg">Découvrez toutes nos offres de box sushi à la coriandre ou à l'avocat !</p>
      </div>
      <div className="flex flex-col p-16">
        <h2 className="text-2xl font-bold text-center pb-8">
          Notre sélection de boxes à la coriandre ou à l'avocat !
        </h2>
        {boxesFiltered ? (
          <div className="grid grid-cols-3 gap-4">
            {boxesFiltered.map((box, index) => (
              <SushiCard key={index} box={box} />
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};

export default SpecificSushi;
