import React from "react";
import "tailwindcss/tailwind.css";

import { Header } from "../components/index";
export const WrapperContainer = () => {
  return (
    <React.Fragment>
      <div className="relative w-screens md:w-40 flex flex-1 justify-items-center items-start flex-col mt-5 ml-2 xsm:text-4xl sm:text-3xl box-border">
        <Header />
      </div>
    </React.Fragment>
  );
};
