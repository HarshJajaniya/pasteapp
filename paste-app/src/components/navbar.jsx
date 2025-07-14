import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-[44px] items-center bg-blue-950 flex-row gap-12 place-content-center mb-4">
      <NavLink
        to={"/"}
        className={"text-[18px] text-white hover:text-blue-300 "}
      >
        Home
      </NavLink>

      <NavLink
        to={"/paste"}
        className={"text-[18px] text-white hover:text-blue-300 "}
      >
        Pastes
      </NavLink>
    </div>
  );
};
export default Navbar;
