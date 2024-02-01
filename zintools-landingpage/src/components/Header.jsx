import React from "react";
import "tailwindcss/tailwind.css";
import Logo from "../../app/Logo.jsx";
import MenuBarSvg from "../hooks/MenuBarSvg.jsx"; //* Custom Svg Components
import SearchIconSvg from "../hooks/SearchIconSvg.jsx";

export const Header = () => {
  return (
    <React.Fragment>
      <header className="xsm:w-[100%] xsm:px-2 sm:w-[100%] md:w-[100vw] flex flex-1 justify-between items-start flex-row  box-border fixed left-1 right-1 ">
        <section className="flex flex-row justify-center items-center">
          <MenuBarSvg height="45" width="45" />
          <Logo />
          <h1 className="xsm:text-base sm:text-lg md:text-2xl font-bold px-2">
            ZinTools
          </h1>
        </section>
        <section className="flex flex-row justify-center items-center pt-1.5">
          <SearchIconSvg height="30" width="30" />
        </section>
      </header>
    </React.Fragment>
  );
};
