
import React from "react";
import Button from "../../components/Button";
import BackgroundLines from "../../components/BackgroundLines";
import { useLoaderData, useNavigate } from "react-router-dom";
import SubTitle from "../../components/SubTitle";
import difficultImg from "../../Assets/img/difficult.gif"
import OperationsColor from "../../Assets/OperationsColor";

export async function loader({ params }) {
    return params.operation
}

function Difficult() {
    const operation = useLoaderData()
    const navigate = useNavigate();

    console.log(OperationsColor(operation)[1])

    function onHandlerClick(dificultad) {
        console.log(`/dificultad/${operation}/${dificultad}/ejercicios`)
        navigate(`/dificultad/${operation}/${dificultad}/ejercicios`)
    }

    return (
            <div className="h-full m-0">
                <SubTitle text={"Escoje la dificultad"} />
                <div className="md:text-2xl grid md:grid-cols-2 w-full h-full py-16">
                    <div className="flex flex-col w-full h-full justify-evenly">
                        <Button label="Fácil" onClick={() => { onHandlerClick("Fácil") }} color={OperationsColor(operation)[1]} />
                        <Button label="Intermedio" onClick={() => { onHandlerClick("Intermedio") }} color={OperationsColor(operation)[2]} />
                        <Button label="Dificil" onClick={() => { onHandlerClick("Difícil") }} color={OperationsColor(operation)[3]} />
                    </div>
                    <div className="flex flex-col w-full h-full justify-evenly items-center relative">
                        <img className="w-10/12 md:w-1/3 " src={difficultImg} alt="imagen de bienvenida" />

                        <BackgroundLines />
                    </div>
                </div>
            </div>
    )
}

export default Difficult;