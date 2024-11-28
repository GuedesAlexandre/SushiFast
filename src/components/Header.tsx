const Header = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Boxes", link: "/boxes" },
    { name: "Sushi Coriandre ou Avocat", link: "/specific-sushi" },
    { name: "Commandes de boxes < 13 pièces", link: "/sushi-boxes" },
  ];

  return (
    <nav className=" text-black h-20 flex items-center justify-between border-b-2 border-orange-400">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <div className="text-orange font-bold text-xl">SushiFast</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="text-black cursor-pointer hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
