import { Boxes } from "../models/Boxes";
import { Food } from "../models/Food";


interface SushiCardProps {
    box: Boxes;
}

const SushiCard: React.FC<SushiCardProps> = ({ box }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={box.image} alt={box.nom} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{box.nom}</h2>
            <p className="text-gray-500 mb-2">Pieces: {box.pieces}</p>
            <p className="text-gray-500 mb-2">Prix: <span className="font-bold text-orange-400">{box.prix}€</span></p>
            <div className="flex flex-wrap mb-2">
                {box.aliments.map((food : Food) => (
                    <span key={food.nom} className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700 mr-2 mb-2">
                      {food.quantite} x  {food.nom}
                    </span>
                ))}
            </div>
            <div className="flex flex-wrap">
                {box.saveurs.map((saveur : string) => (
                    <span key={saveur} className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700 mr-2 mb-2">
                        {saveur}
                    </span>
                ))}
                
            </div>
        </div>
    );
};

export default SushiCard;
