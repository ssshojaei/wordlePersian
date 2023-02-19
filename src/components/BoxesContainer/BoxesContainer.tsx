import React from "react";
import IBoxContainerProps from "./BoxContainer.type";

const BoxesContainer = ({ children, ...rest }: IBoxContainerProps) => {
  return (
    <div
      {...rest}
      className="bg-slate-50 grid-cols-5 grid gap-2 max-w-sm mx-auto"
    >
      {children}
    </div>
  );
};

export default BoxesContainer;
