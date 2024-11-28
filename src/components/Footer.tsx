import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SushiFast
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/boxes" className="hover:underline me-4 md:me-6">
                  Boxes
                </Link>
              </li>
              <li>
                <Link to="/specific-sushi" className="hover:underline me-4 md:me-6">
                  Sushi Coriandre ou Avocat
                </Link>
              </li>
              <li>
                <Link to="/sushi-boxes" className="hover:underline me-4 md:me-6">
                 Commandre de boxes inférieur à 13 pièces
                </Link>
              </li>
            
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a className="hover:underline">
              Alexandre Guedes™
            </a>
            . TD2 B3 MMI.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
