import { Link, useLocation } from "react-router-dom";

export default function Pagination({page}){
    const location = useLocation()
    console.log(location.pathname)
    return(
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
    )
}