import { Link, useLocation } from "react-router-dom";

export default function Pagination({page}){
    const location = useLocation()
    console.log(location)
    return(
        <div className="flex justify-center items-end ">
            <Link to="/aprender/Multiplicacion/Explicacion" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/Explicacion' ?  'bg-purple' : 'bg-gray-300'}`}>
                Explicación
            </Link>
            <Link to="/aprender/Multiplicacion/1" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/1' ?  'bg-purple' : 'bg-gray-300'}`}>
                1
            </Link>
            <Link to="/aprender/Multiplicacion/2" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/2' ?  'bg-purple' : 'bg-gray-300'}`}>
                2
            </Link>
            <Link to="/aprender/Multiplicacion/3" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/3' ?  'bg-purple' : 'bg-gray-300'}`}>
                3
            </Link>
            <Link to="/aprender/Multiplicacion/4" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/4' ?  'bg-purple' : 'bg-gray-300'}`}>
                4
            </Link>
            <Link to="/aprender/Multiplicacion/5" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/5' ?  'bg-purple' : 'bg-gray-300'}`}>
                5
            </Link>
            <Link to="/aprender/Multiplicacion/6" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/6' ?  'bg-purple' : 'bg-gray-300'}`}>
                6
            </Link>
            <Link to="/aprender/Multiplicacion/7" className={`mx-5 px-5 py-2 ${location.pathname == '/aprender/Multiplicacion/7' ?  'bg-purple' : 'bg-gray-300'}`}>
                7
            </Link>
            <Link to="/dificultad/Multiplicación" className='mx-5 px-5 py-2 bg-gray-300'>
                Ejercicios
            </Link>
        </div>
    )
}