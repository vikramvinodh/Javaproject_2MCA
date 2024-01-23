import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const HomeNavbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mx-5">
           
            </div>
      
          </div>

          <div>
            <button
              onClick={() => router.push("/")}
              className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3 "
            >
              Book An Cab
            </button>
          
            <MenuIcon className="ml-5 text-white text-3xl" fontSize="3rem" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
