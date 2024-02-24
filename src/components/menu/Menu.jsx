import {
    Link,
    useNavigate,
} from "react-router-dom";
import OperationsColor from "../../Assets/OperationsColor";
import BurgerMenu from "./BurgerMenu";
import { useLocation } from "react-router-dom/dist";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Menu({ operation }) {
    const navigation = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="bg-white md:bg-transparent py-5">
            <nav className=" hidden md:inline min-[1024px]:block">
                <div onClick={() => { navigation("/") }} className="absolute top-[5%] z-10 md:mt-2 mx-8  hover:cursor-pointer"
                >
                    <FaArrowLeftLong size={35} />
                    
                </div>
                <div className="flex justify-evenly items-center px-16 pt-10 text-xl">
                    <Link to="/aprender/Suma/Explicacion" className="overflow-hidden relative px-12 py-5 rounded">
                        <span
                            className={`${path.startsWith("/aprender/Suma") ? "bg-yellow-light translate-x-0" : "translate-x-[-100%]"
                                } absolute -inset-0 transition-all duration-300 -z-10`}
                        ></span>
                        Suma
                    </Link>
                    <Link to="/aprender/Resta/Explicacion" className="overflow-hidden relative px-12 py-5 rounded">
                        <span
                            className={`${path.startsWith("/aprender/Resta") ? "bg-pink-light translate-x-0" : "translate-x-[-100%]"
                                } absolute -inset-0 transition-all duration-300 -z-10`}
                        ></span>
                        Resta

                    </Link>
                    <Link to="/aprender/Multiplicacion/Explicacion" className="overflow-hidden relative px-12 py-5 rounded">
                        <span
                            className={`${path.startsWith("/aprender/Multiplicacion") ? "bg-purple-light translate-x-0" : "translate-x-[-100%]"
                                } absolute -inset-0 transition-all duration-300 -z-10`}
                        ></span>
                        Multiplicación
                    </Link>
                    <Link to="/aprender/Division/Explicacion" className="overflow-hidden relative px-12 py-5 rounded">
                        <span
                            className={`${path.startsWith("/aprender/Division") ? "bg-blue-light translate-x-0" : "translate-x-[-100%]"
                                } absolute -inset-0 transition-all duration-300 -z-10`}
                        ></span>División</Link>
                </div>
            </nav>
            <BurgerMenu operation={operation} />
            <h1 className={`font-bold text-5xl md:text-[6rem] text-center text-${OperationsColor(operation)[0]} ${operation == "Multiplicación" && "text-[2rem] md:text-6xl"} `}>
                {operation}
            </h1>
        </div>
    )
}