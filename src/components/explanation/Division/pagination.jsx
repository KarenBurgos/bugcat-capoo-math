import { Link, useLocation } from "react-router-dom";

export default function Pagination({page}){
    const location = useLocation()
    return(
        <div className="flex justify-center items-end ">
            <Link to="/aprender/Division/Explicacion" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/Explicacion' ?  'bg-blue' : 'bg-gray-300'}`}>
                Explicación
            </Link>
            <Link to="/aprender/Division/1" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/1' ?  'bg-blue' : 'bg-gray-300'}`}>
                1
            </Link>
            <Link to="/aprender/Division/2" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/2' ?  'bg-blue' : 'bg-gray-300'}`}>
                2
            </Link>
            <Link to="/aprender/Division/3" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/3' ?  'bg-blue' : 'bg-gray-300'}`}>
                3
            </Link>
            <Link to="/aprender/Division/4" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/4' ?  'bg-blue' : 'bg-gray-300'}`}>
                4
            </Link>
            <Link to="/aprender/Division/5" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/5' ?  'bg-blue' : 'bg-gray-300'}`}>
                5
            </Link>
            <Link to="/aprender/Division/6" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/6' ?  'bg-blue' : 'bg-gray-300'}`}>
                6
            </Link>
            <Link to="/aprender/Division/7" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/7' ?  'bg-blue' : 'bg-gray-300'}`}>
                7
            </Link>
            <Link to="/aprender/Division/8" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Division/8' ?  'bg-blue' : 'bg-gray-300'}`}>
                8
            </Link>
            <Link to="/dificultad/Division" className={`mx-5 px-5 py-2 bg-gray-300`}>
                Ejercicios
            </Link>
        </div>
    )
}