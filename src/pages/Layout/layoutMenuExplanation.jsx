import { Link, Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import OperationsColor from "../../Assets/OperationsColor"
import { SoundProvider } from "../../components/Sound";
import { useState } from "react";
import { IoMenu,IoClose } from "react-icons/io5";

export async function loader({ params }) {
    return params
}

export default function LayoutMenuExplanation() {
    const params = useLoaderData()
    const navigation = useNavigate()
    let operation = params.operation
    const [movilMenu, setMovilMenu] = useState(false)
    const location = useLocation()
    const path = location.pathname

    if (operation == "Multiplicacion") {
        operation = "Multiplicación"
    }
    else if (operation == "Division") {
        operation = "División"
    }

    return (
        <div className="relative h-screen w-screen">
            <div className="h-full grid grid-rows-[10vh,90vh] items-center md:grid-rows-[30vh,70vh] grid-cols-1 justify-center">
                <d iv className="">
                    <nav className="hidden md:inline">
                        <div onClick={() => { navigation("/") }} className="absolute z-10 md:mt-2 mx-8  hover:cursor-pointer">
                            <p>Regresar</p>
                            <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="4 5 24 24">
                                <path d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z" fill="#000000" data-name="Left" />
                            </svg>
                        </div>
                        <div className="flex justify-evenly items-center px-16 pt-10 text-xl">
                            <Link to="/aprender/Suma/Explicacion">Suma</Link>
                            <Link to="/aprender/Resta/Explicacion">Resta</Link>
                            <Link to="/aprender/Multiplicacion/Explicacion">Multiplicación</Link>
                            <Link to="/aprender/Division/Explicacion">División</Link>
                        </div>
                    </nav>
                        <div className="flex items-center justify-center md:hidden relative">
                            <div className="md:hidden absolute z-10 top-2 left-5" onClick={()=>{setMovilMenu(true)}}>
                                <IoMenu size={35}/>
                            </div>
                    </div>
                    {movilMenu &&
                                <nav className="md:hidden h-screen absolute z-20 bg-white rounded">
                                    <div className="md:hidden h-full divide-y-2">
                                        <div className="flex relative justify-center w-full py-5">
                                            <p className={`text-2xl text-${OperationsColor(operation)[2]}`}>Operaciones</p>
                                            
                                            <IoClose onClick={()=>{setMovilMenu(false)}} size={35} className="absolute right-2"/>
                                        </div>
                                        <div className="flex flex-col h-full items-start px-16 pt-10 text-xl">
                                            <Link to="/aprender/Suma/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Suma") && 'bg-yellow-light' }`}>Suma</Link>
                                            <Link to="/aprender/Resta/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Resta") && 'bg-pink-light' }`}>Resta</Link>
                                            <Link to="/aprender/Multiplicacion/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Multiplicacion") && 'bg-purple-light' }`}>Multiplicación</Link>
                                            <Link to="/aprender/Division/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Division") && 'bg-blue-light' }`}>División</Link>
                                        </div>
                                    </div>
                                </nav>
                            }
                    <h1 className={`font-bold text-5xl md:text-[6rem] text-center text-${OperationsColor(operation)[0]} ${operation == "Multiplicación" && 'text-[2rem] md:text-6xl'} `}>{operation}</h1>
                </d>
                <div class="h-full w-ful justify-center ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}