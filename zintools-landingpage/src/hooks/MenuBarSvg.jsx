import React from "react";

const MenuBarSvg = (props) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={props.height}
        viewBox="0 -960 960 960"
        width={props.width}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </React.Fragment>
  );
};

export default MenuBarSvg;
