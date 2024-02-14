import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundLines from "../components/BackgroundLines";
import HomeImg from "../Assets/img/Home.gif"
import curvArrow from "../Assets/curvLeftArrow.svg"
import Button from "../components/Button";

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
        <div className="relative w-full m-0 flex flex-col items-center justify-evenly md:justify-around pt-32">
            <div className="flex flex-col w-1/2 md:w-1/4 justify-evenly items-center relative">
                <img src={HomeImg} alt="home gif" className="w-full md:w-1/2" />
                <svg className="opacity-50 w-[65vw] md:w-11/12 absolute top-50 left-50 -z-10" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 300 300"><path fill="#75DDDD" d="M24.2 33.67H70.53V61.07H24.2z" transform="rotate(-45 47.37 47.368)"></path><path fill="#75DDDD" d="M232.19 241.66H278.52V269.06H232.19z" transform="rotate(-45 255.362 255.356)"></path><path fill="#7A28CB" d="M9.58 67.17H151.14000000000001V94.57H9.58z" transform="rotate(-45 80.36 80.874)"></path><path fill="#7A28CB" d="M148.59 206.18H290.15V233.58H148.59z" transform="rotate(-45 219.37 219.884)"></path><path fill="#FC60A8" d="M-8.81 101.42H239.07V128.82H-8.81z" transform="rotate(-45 115.13 115.132)"></path><path fill="#FC60A8" d="M60.93 171.17H308.81V198.57H60.93z" transform="rotate(-45 184.868 184.875)"></path><path fill="#FEEB70" d="M-9.95 135.73H308.81V163.13H-9.95z" transform="rotate(-45 149.428 149.435)"></path></svg>
            </div>
            <div className=" md:text-2xl flex flex-col md:flex-row justify-between items-center w-full px-12">

                <div className="relative flex flex-col items-center hover:cursor-default pt-20 w-full justify-center"
                    onMouseEnter={() => { setIsHoveredLearn(true) }}
                    onMouseLeave={() => { setIsHoveredLearn(false) }}
                >
                    {isHoveredLearn &&
                        <div className="absolute z-10 flex w-1/2 top-0">
                            <embed src={curvArrow} className="rotate-180 w-14" />
                            <p className="text-xl pl-5">Aprende los pasos para Sumar, Restar, Multiplicar y Dividir</p>
                        </div>
                    }

                    <div className="w-full">
                        <Button label="Aprender" onClick={onHandlerLearn} color="blue"/>
                    </div>
                    

                </div>
                <div className="relative flex flex-col items-center hover:cursor-default pt-20 w-full"
                    onMouseOver={() => { setIsHoveredPractice(true) }}
                    onMouseLeave={() => { setIsHoveredPractice(false) }}
                >
                    {isHoveredPractice &&
                        <div className="absolute z-10 flex w-1/2 top-0">
                            <embed src={curvArrow} className="rotate-180 w-14" />
                            <p className="text-xl pl-5">Haz ejercicios de Suma, Resta, Multiplicación y Dividisión segun la dificultad que escojas</p>
                        </div>
                    }
                    <div className="w-full">
                        <Button label="Ejercicios" onClick={onHandlerPractice} color="yellow"/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main;