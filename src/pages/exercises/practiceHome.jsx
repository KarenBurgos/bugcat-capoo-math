import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import BackgroundLines from "../../components/BackgroundLines";

function ExercisesMain() {
  const navigate = useNavigate();

  function onHandlerClick(operacion) {
    navigate(`/dificultad/${operacion}`);
  }

  return (
    <div className="md:text-2xl grid md:grid-cols-2 w-full h-[80vh] md:h-[70vh] justify-evenly items-center">
      
        <div className="flex flex-col h-full justify-evenly px-12 md:p-0">
          <div>
            <Button
              label="Suma"
              onClick={() => onHandlerClick("Suma")}
              color={"yellow"}
            />
          </div>
          <div>
            <Button
              label="Resta"
              onClick={() => onHandlerClick("Resta")}
              color={"pink"}
            />
          </div>
          <div>
            <Button
              label="Multiplicación"
              onClick={() => onHandlerClick("Multiplicación")}
              color={"purple"}
            />
          </div>
          <div>
            <Button
              label="División"
              onClick={() => onHandlerClick("División")}
              color={"blue"}
            />
          </div>
        </div>
        <div className="flex flex-col w-full justify-evenly items-center relative w-[80vw] md:w-full">
          <img
            className="w-3/4 md:w-1/3 "
            src="https://images.hive.blog/0x0/https://media.giphy.com/media/xUPGcGzMdaaTX13PfW/giphy.gif"
            alt="imagen de bienvenida"
          />
          <svg className="opacity-50 w-[65vw] md:w-1/2 absolute top-50 left-50 -z-10" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 300 300"><path fill="#75DDDD" d="M24.2 33.67H70.53V61.07H24.2z" transform="rotate(-45 47.37 47.368)"></path><path fill="#75DDDD" d="M232.19 241.66H278.52V269.06H232.19z" transform="rotate(-45 255.362 255.356)"></path><path fill="#7A28CB" d="M9.58 67.17H151.14000000000001V94.57H9.58z" transform="rotate(-45 80.36 80.874)"></path><path fill="#7A28CB" d="M148.59 206.18H290.15V233.58H148.59z" transform="rotate(-45 219.37 219.884)"></path><path fill="#FC60A8" d="M-8.81 101.42H239.07V128.82H-8.81z" transform="rotate(-45 115.13 115.132)"></path><path fill="#FC60A8" d="M60.93 171.17H308.81V198.57H60.93z" transform="rotate(-45 184.868 184.875)"></path><path fill="#FEEB70" d="M-9.95 135.73H308.81V163.13H-9.95z" transform="rotate(-45 149.428 149.435)"></path></svg>
        </div>
      </div>
    
  );
}

export default ExercisesMain;
