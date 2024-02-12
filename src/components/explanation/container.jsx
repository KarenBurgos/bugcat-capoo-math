import React from 'react';
import BackgroundLines from "../BackgroundLines";
import StepNumber from "./stepNumber";

export default function Container({ img, step, children, color }) {
    return (
        <div className="grid grid-cols-[75%,25%] justify-center md:px-20">
            <div className="text-xl grid grid-cols-[5%,95%]">
                <StepNumber number={step} color={ color }/>
                <div>
                    {children}
                </div>
            </div>
            { img &&
                <div className="flex flex-col h-full justify-evenly items-center relative">
                <img className="w-9/12 md:w-9/12 " src={img} alt="imagen de bienvenida" />
                <BackgroundLines full={true} />
            </div>    
            }
            
        </div>
    )
}