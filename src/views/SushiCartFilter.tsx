import { useEffect, useState } from "react";
import { fetchSushiBoxes } from "../utils/sushiApiService";
import type { Boxes as BoxesType } from "../models/Boxes";
import SushiCard from "../components/SushiCard";

const SushiCartFilter = () => {
    const [boxesFiltered, setBoxesFiltered] = useState<BoxesType[] | undefined>();
    useEffect(() => {
        fetchSushiBoxes().then((data) => {
            const filteredBoxes = data.filter((box) => {
                return box.pieces < 13;
            });
            setBoxesFiltered(filteredBoxes);
        });
    }, []);
    const Totalprices = boxesFiltered?.reduce((acc, box) => acc + box.prix, 0);
  return (
    <>
    <div className="text-center pt-4">
      <h1 className="text-3xl font-bold text-center p-8">Sushi Boxes inférieur à 13 pièces : La commande pour les petites faims !</h1>
      <p className="text-lg">Et si vous faisiez une commande avec nos magnifiques boxes inférieur à 13 pièces !</p>
    </div>
    <div className="flex flex-col p-16">
      <h2 className="text-2xl font-bold text-center pb-8">
        Notre sélection de boxes inférieur à 13 pièces !
      </h2>
      <div className="text-center">
      <span>Et si vous les preniez toutes ça vous ferait combien ?</span>
        <p className="text-2xl font-bold text-center pb-8 pt-2">
          Le prix total serait de {Totalprices}€
        </p>
      </div>
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
  )
}

export default SushiCartFilter