import React from 'react';
import BackgroundLines from "../BackgroundLines";
import StepNumber from "./stepNumber";

export default function Container({ img, step, children, color }) {
    return (
        <div className="grid grid-cols-[6%,74%,25%] justify-evenly md:px-20 w-screen">
            <StepNumber number={step} color={color} />
            <div className="text-xl flex flex-cols">
                <div>
                    {children}
                </div>
            </div>
            {img &&
                <div className="flex flex-col h-full  items-start sticky top-0">
                    <img className="w-9/12 md:w-full sticky top-0" src={img} alt="imagen de bienvenida" />
                </div>
            }
        </div>
    )
}