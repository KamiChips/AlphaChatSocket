function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 
                    bg-linear-to-r from-[#3c75f3] to-[#7665cc] 
                    text-white flex justify-between items-center 
                    px-8">

      <h2 className="text-2xl font-bold">
        SeMeCerroElSocket
      </h2>

      <button className="bg-white text-blue-600 
                         px-4 py-2 rounded-md 
                         font-semibold 
                         hover:bg-gray-100 
                         transition duration-300 cursor-pointer">
        Desconectarse
      </button>

    </nav>
  );
}

export default Navbar;