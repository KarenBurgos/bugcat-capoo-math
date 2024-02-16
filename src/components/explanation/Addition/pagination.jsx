import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Pagination({ currentPage, setCurrentPage }) {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(currentPage)
    const onClickNext = () => {
      if(currentPage === "Explicacion"){
        setCurrentPage(1)
      }
      if (currentPage < 4) {
        setCurrentPage(currentPage + 1);
        navigate(`/aprender/Suma/${currentPage + 1}`);
      }
    };
  
    const onClickPrevious = () => {
      if(currentPage === 1){
        setCurrentPage("Explicacion")
      }
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        navigate(`/aprender/Suma/${currentPage - 1}`);
      }
    };
  
    return (
      <div className="flex justify-center items-end">
         <div className="flex justify-center items-end ">
            <Link to="/aprender/Suma/Explicacion" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Suma/Explicacion' ?  'bg-yellow' : 'bg-gray-300'}`}>
                Explicación
            </Link>
            <Link to="/aprender/Suma/1" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Suma/1' ?  'bg-yellow' : 'bg-gray-300'}`}>
                1
            </Link>
            <Link to="/aprender/Suma/2" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Suma/2' ?  'bg-yellow' : 'bg-gray-300'}`}>
                2
            </Link>
            <Link to="/aprender/Suma/3" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Suma/3' ?  'bg-yellow' : 'bg-gray-300'}`}>
                3
            </Link>
            <Link to="/aprender/Suma/4" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Suma/4' ?  'bg-yellow' : 'bg-gray-300'}`}>
                4
            </Link>
            <Link to="/dificultad/Suma" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Suma/5' ?  'bg-yellow' : 'bg-gray-300'}`}>
                Ejercicios
            </Link>
        </div>
        <div>
          <button onClick={onClickPrevious}>previus</button>
          <p className="px-5">{currentPage}</p>
          <button onClick={onClickNext}>next</button>
        </div>
      </div>
    );
  }