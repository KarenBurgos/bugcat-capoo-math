import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundLines from "../components/BackgroundLines";
import HomeImg from "../Assets/img/Home.gif"
import curvArrow from "../Assets/curvLeftArrow.svg"

function Main() {
    const navigate = useNavigate();
    const [isHoveredLearn, setIsHoveredLearn] = useState(false);
    const [isHoveredPractice, setIsHoveredPractice] = useState(false);

    useEffect(() => {
        document.body.classList.add('home-page');

        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    function onHandlerPractice() {
        navigate(`/practica`)
    }

    function onHandlerLearn() {
        navigate(`/aprender/Suma/Explicacion`)
    }


    return (
        <div className="relative h-full m-0 flex flex-col items-center justify-around pt-32">
            <div className="flex flex-col w-1/4 justify-evenly items-center relative">
                <img src={HomeImg} alt="home gif" className="w-10/12 md:w-1/2" />
                <BackgroundLines full={true} />
            </div>
            <div className=" md:text-2xl grid md:grid-cols-2 justify-between items-center justify-center w-full mt-5">

                <div className="relative flex flex-col items-center relative hover:cursor-default pt-20"
                    onMouseOver={() => { setIsHoveredLearn(true) }}
                    onMouseLeave={() => { setIsHoveredLearn(false) }}
                >
                    {isHoveredLearn &&
                        <div className="absolute z-10 flex w-1/2 top-0">
                            <embed src={curvArrow} className="rotate-180 w-14" />
                            <p className="text-xl pl-5">Aprende los pasos para Sumar, Restar, Multiplicar y Dividir</p>
                        </div>
                    }
                    <button
                        className='relative overflow-hidden w-9/12 md:w-1/2 h-14 md:h-20 px-10 py-2 border border-2 border-customBlack rounded-md group hover:cursor-pointer'
                        onClick={onHandlerLearn}

                    >
                        <span className="relative z-10 border-black">Aprender</span>
                        <span className="absolute -inset-0 bg-gradient-to-r bg-blue w-0 transition-all duration-300 group-hover:w-full"></span>
                    </button>

                </div>
                <div className="relative flex flex-col items-center relative hover:cursor-default pt-20"
                    onMouseOver={() => { setIsHoveredPractice(true) }}
                    onMouseLeave={() => { setIsHoveredPractice(false) }}
                >
                    {isHoveredPractice &&
                        <div className="absolute z-10 flex w-1/2 top-0">
                            <embed src={curvArrow} className="rotate-180 w-14" />
                            <p className="text-xl pl-5">Haz ejercicios de Suma, Resta, Multiplicación y Dividisión segun la dificultad que escojas</p>
                        </div>
                    }
                    <button
                        className='relative overflow-hidden w-9/12 md:w-1/2 h-14 md:h-20 px-10 py-2 border border-2 border-customBlack rounded-md group hover:cursor-pointer'
                        onClick={onHandlerPractice}

                    >
                        <span className="relative z-10 ">Practicar</span>
                        <span className="absolute -inset-0 bg-yellow w-0 transition-all duration-300 group-hover:w-full"></span>

                    </button>

                </div>
            </div>

        </div>
    )
}

export default Main;