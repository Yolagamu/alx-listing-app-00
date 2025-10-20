const Header = () => {
  const types = ["Rooms", "Mansions", "Countryside", "Villas", "Apartments"];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">StayFinder</h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search your destination..."
          className="border rounded-md px-3 py-2 w-full md:w-1/3 mt-2 md:mt-0"
        />

        {/* Auth buttons */}
        <div className="flex gap-3 mt-2 md:mt-0">
          <button className="text-green-600">Sign In</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-gray-100 py-2 overflow-x-auto">
        <div className="flex space-x-4 px-4">
          {types.map((type, index) => (
            <span
              key={index}
              className="cursor-pointer bg-white shadow-sm px-4 py-1 rounded-full text-sm text-gray-600 hover:bg-green-100"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
