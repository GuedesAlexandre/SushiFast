import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <img src="https://t4.ftcdn.net/jpg/02/04/59/29/360_F_204592936_rvFaR64FC4hEXaNzdCrti7fNdRIjNYN4.jpg"></img>
        <h1 className="text-4xl font-bold text-center">
          Bienvenue sur SushiFast
        </h1>
        <p>Commandez vos sushis préférés en quelques clics !</p>
      </div>
      <div className="mt-10">
        <Link to="/boxes">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Découvrir nos boxes !
      </button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
