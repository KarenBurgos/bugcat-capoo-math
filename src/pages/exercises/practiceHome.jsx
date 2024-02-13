import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import BackgroundLines from "../../components/BackgroundLines";

function ExercisesMain() {
    const navigate = useNavigate();
    

    function onHandlerClick(operacion) {
        navigate(`/dificultad/${operacion}`)
    }


    return (
        <div className="h-full m-0">

            <div id='menu' className="md:text-2xl grid md:grid-cols-2 w-full h-full">
                <div className="flex flex-col justify-evenly">
                    <Button label="Suma" onClick={() => onHandlerClick("Suma")} color={"yellow"}/>
                    <Button label="Resta" onClick={() => onHandlerClick("Resta")} color={"pink"}/>
                    <Button label="Multiplicación" onClick={() => onHandlerClick("Multiplicación")}  color={"purple"}/>
                    <Button label="División" onClick={() => onHandlerClick("División")} color={"blue"}/>
                </div>
                <div className="flex flex-col w-full h-full justify-evenly items-center relative">
                    <img className="w-10/12 md:w-1/2" src="https://images.hive.blog/0x0/https://media.giphy.com/media/xUPGcGzMdaaTX13PfW/giphy.gif" alt="imagen de bienvenida" />
                    <BackgroundLines />
                </div>
            </div>

        </div>
    )
}

export default ExercisesMain;