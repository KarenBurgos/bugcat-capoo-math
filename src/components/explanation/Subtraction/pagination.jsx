import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdNavigateBefore,MdNavigateNext } from "react-icons/md";

export default function Pagination({ page, currentPage, setCurrentPage }) {
    const location = useLocation();
    const navigate = useNavigate();

    const onClickNext = () => {
        if (currentPage === "Explicacion") {
            setCurrentPage(1)
            navigate(`/aprender/Resta/1`);
        }
        if (currentPage < 6) {
            setCurrentPage(currentPage + 1);
            navigate(`/aprender/Resta/${currentPage + 1}`);
        }
    };

    const onClickPrevious = () => {
        if (currentPage === 1) {
            setCurrentPage("Explicacion")
            navigate(`/aprender/Resta/Explicacion`);
        }
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/aprender/Resta/${currentPage - 1}`);
        }
    };


    return (
        <div>
            <div className="hidden md:inline-flex flex justify-center items-end ">
                <Link to="/aprender/Resta/Explicacion" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/Explicacion' ? 'bg-pink' : 'bg-gray-300'}`}>
                    Explicación
                </Link>
                <Link to="/aprender/Resta/1" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/1' ? 'bg-pink' : 'bg-gray-300'}`}>
                    1
                </Link>
                <Link to="/aprender/Resta/2" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/2' ? 'bg-pink' : 'bg-gray-300'}`}>
                    2
                </Link>
                <Link to="/aprender/Resta/3" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/3' ? 'bg-pink' : 'bg-gray-300'}`}>
                    3
                </Link>

                <Link to="/aprender/Resta/4" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/4' ? 'bg-pink' : 'bg-gray-300'}`} >
                    4
                </Link>

                <Link to="/aprender/Resta/5" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == ('/aprender/Resta/5') ? 'bg-pink' : 'bg-gray-300'}`} >
                    5
                </Link>
                <Link to="/aprender/Resta/6" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/6' ? 'bg-pink' : 'bg-gray-300'}`}>
                    6
                </Link>
                <Link to="/dificultad/Resta" className='rounded-sm mx-5 px-5 py-2 bg-gray-300'>
                    Ejercicios
                </Link>
            </div>
            <div className="md:hidden w-screen grid grid-cols-3 items-center justify-center">
                <div className="flex justify-end">
                    <MdNavigateBefore size={40} onClick={onClickPrevious} className="bg-gray-300 " />
                </div>
                <p className="w-full text-center">{currentPage}</p>
                <div className="flex justify-start">
                    <MdNavigateNext size={40} onClick={onClickNext} className="bg-gray-300 " />
                </div>
            </div>
        </div>
    )
}