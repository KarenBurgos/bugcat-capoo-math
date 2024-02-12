import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Pagination({ page }) {
    const location = useLocation()
    const [activeSubpage4, setActiveSubpage4] = useState(
        location.pathname.startsWith("/aprender/Resta/4") ? "4-1" : null
    );
    const [activeSubpage5, setActiveSubpage5] = useState(
        location.pathname.startsWith("/aprender/Resta/5") ? "5-1" : null
    );

    function handleSubpage4Click(subpageId) {
        setActiveSubpage4(subpageId);
    }

    function handleSubpage5Click(subpageId) {
        setActiveSubpage5(subpageId);
    }

    console.log(page)
    return (
        <div className="flex justify-center items-end ">
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

            <Link to="/aprender/Resta/4-1"><button className={`rounded-sm mx-5 px-5 py-2 ${location.pathname.startsWith('/aprender/Resta/4-') ? 'bg-pink' : 'bg-gray-300'}`} onClick={() => handleSubpage4Click("4-1")}>
                4
            </button>
            </Link>
            {activeSubpage4 && (
                <>
                    <Link to="/aprender/Resta/4-1" className={`rounded-sm  mx-5 px-3 py-1 ${location.pathname == '/aprender/Resta/4-1' ? 'bg-pink-light' : 'bg-gray-300'}`}>4.1</Link>
                    <Link to="/aprender/Resta/4-2" className={`rounded-sm mx-5 px-3 py-1  ${location.pathname == '/aprender/Resta/4-2' ? 'bg-pink-light' : 'bg-gray-300'}`}>4.2</Link>
                </>
            )}
            <Link to="/aprender/Resta/5-1"><button className={`rounded-sm mx-5 px-5 py-2 ${location.pathname.startsWith('/aprender/Resta/5-') ? 'bg-pink' : 'bg-gray-300'}`} onClick={() => handleSubpage5Click("5-1")}>
                5
            </button>

                {activeSubpage5 && (
                    <>
                        <Link to="/aprender/Resta/5-1" className={`rounded-sm mx-5 px-3 py-1 ${location.pathname === '/aprender/Resta/5-1' ? 'bg-pink-light' : 'bg-gray-300'}`}>5.1</Link>
                        <Link to="/aprender/Resta/5-2"  className={`rounded-sm mx-5 px-3 py-1 ${location.pathname === '/aprender/Resta/5-2' ? 'bg-pink-light' : 'bg-gray-300' }`}>5.2</Link>
                    </>
                )}
            </Link>
            <Link to="/aprender/Resta/6" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/6' ? 'bg-pink' : 'bg-gray-300'}`}>
                6
            </Link>
            <Link to="/dificultad/Resta" className={`rounded-sm mx-5 px-5 py-2 ${location.pathname == '/aprender/Resta/5' ? 'bg-pink' : 'bg-gray-300'}`}>
                Ejercicios
            </Link>
        </div>
    )
}