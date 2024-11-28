import { useEffect, useState } from "react";
import { fetchSushiBoxes } from "../utils/sushiApiService";
import type { Boxes, Boxes as BoxesType } from "../models/Boxes";
import SushiCard from "../components/SushiCard";

const Boxes = () => {
  const [boxes, setBoxes] = useState<BoxesType[] | undefined>();
  useEffect(() => {
    fetchSushiBoxes().then((data) => setBoxes(data));
  }, []);
  const biggestPriceBox = boxes?.sort((a, b) => b.prix - a.prix)[0];
  return (
    <>
      <div className="text-center pt-4">
        <h1 className="text-3xl font-bold text-center p-8">Sushi Boxes</h1>
        <p className="text-lg">Découvrez toutes nos offres de box sushi !</p>
      </div>
      <div className="flex p-16 flex-col justify-center items-center  ">
        <h2 className="text-2xl font-bold text-center pb-8">
          La box la plus chère mais aussi la meilleure !
          </h2>
        {biggestPriceBox ? (
          <div className="flex justify-center itemps-center w-1/2">
            <SushiCard box={biggestPriceBox} />
          </div>
        ) : (
          "Loading..."
        )}
      </div>
      <div className="flex flex-col p-16">
        <h2 className="text-2xl font-bold text-center pb-8">Notre sélection de boxes !</h2>
        {boxes ? (
          <div className="grid grid-cols-3 gap-4">
            {boxes.map((box, index) => (
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

export default Boxes;
