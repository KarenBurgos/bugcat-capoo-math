import React from "react";
import BackgroundLines from "../BackgroundLines";
import StepNumber from "./stepNumber";

export default function Container({ img, step, children, color }) {
  return (
    <div
      id="container"
      className="grid grid-cols-1 w-screen justify-evenly md:px-20 md:grid-cols-[6%,74%,25%]"
    >
      <div className="mb-5">
        <StepNumber number={step} color={color} />
      </div>
      <div className="text-justify text-xl mix-[1440px]:text-3xl">
        <div className="mt-16 px-10 md:m-5 md:p-0">{children}</div>
      </div>
      {img && (
        <div className=" col-span-3 md:col-span-1 flex flex-col h-full w-full items-center md:items-start sticky top-0 pt-10 md:p-0">
          <img
            className="w-2/3 md:w-full sticky top-0"
            src={img}
            alt="imagen de bienvenida"
          />
        </div>
      )}
    </div>
  );
}
