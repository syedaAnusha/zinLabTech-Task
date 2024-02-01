import React from "react";
import "tailwindcss/tailwind.css";
import Logo from "../../app/Logo.jsx";
import MenuBarSvg from "../hooks/MenuBarSvg.jsx"; //* Custom Svg Components
import SearchIconSvg from "../hooks/SearchIconSvg.jsx";

export const Header = () => {
  return (
    <React.Fragment>
      <header className="flex flex-1 justify-items-center items-start flex-row py-.2">
        <MenuBarSvg height="45" width="45" />
        <div className="flex xsm:w-30 items-center mt-1">
          <Logo />
          <h1 className="xsm:text-2xl font-bold px-1/2">ZinTools</h1>
          <section className="ml-16">
            <SearchIconSvg height="30" width="30" />
          </section>
        </div>
      </header>
    </React.Fragment>
  );
};
