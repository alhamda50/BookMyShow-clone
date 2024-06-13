import React from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

export const NextArrow = (props) => {
  return(
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "18%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
      onClick={props.onClick}
    >
      <BiChevronRight color="white" size="20px" />
    </div>
  );
};

export const PrevArrow = (props) => {
  return(
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "18%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      <BiChevronLeft color="white" size="24px" />
    </div>
  );
};
