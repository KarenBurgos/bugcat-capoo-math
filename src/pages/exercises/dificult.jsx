import React from "react";
import Button from "../../components/buttons/Button";
import BackgroundLines from "../../components/BackgroundLines";
import { useLoaderData, useNavigate } from "react-router-dom";
import difficultImg from "../../Assets/img/difficult.gif";
import OperationsColor from "../../Assets/OperationsColor";

export async function loader({ params }) {
  return params.operation;
}

function Difficult() {
  const operation = useLoaderData();
  const navigate = useNavigate();

  console.log(OperationsColor(operation)[1]);

  function onHandlerClick(dificultad) {
    console.log(`/dificultad/${operation}/${dificultad}/ejercicios`);
    navigate(`/dificultad/${operation}/${dificultad}/ejercicios`);
  }

  return (
    <div className="md:text-2xl grid md:grid-cols-2 w-full h-[80vh] md: h-full justify-evenly items-center">
      <div className="flex flex-col w-full ">
        <div>
          <Button
            label="Fácil"
            onClick={() => {
              onHandlerClick("Fácil");
            }}
            color={OperationsColor(operation)[1]}
          />
        </div>
        <div className="py-[10%] md:py-[5%]">
          <Button
            label="Intermedio"
            onClick={() => {
              onHandlerClick("Intermedio");
            }}
            color={OperationsColor(operation)[2]}
          />
        </div>
        <div>
          <Button
            label="Dificil"
            onClick={() => {
              onHandlerClick("Difícil");
            }}
            color={OperationsColor(operation)[3]}
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-evenly items-center relative">
        <img
          className="w-3/4 md:w-1/3 "
          src={difficultImg}
          alt="imagen de bienvenida"
        />
        <BackgroundLines />
      </div>
    </div>
  );
}

export default Difficult;
