import {
    Link,
    useNavigate,
} from "react-router-dom";
import OperationsColor from "../../Assets/OperationsColor";
import BurgerMenu from "../../components/menu/BurgerMenu";
import { useLocation } from "react-router-dom/dist";

export default function Menu({ operation }) {
    const navigation = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="bg-white md:bg-transparent py-5">
            <nav className="hidden md:inline min-[1024px]:block">
                <div onClick={ () => {navigation("/") }} className="absolute z-10 md:mt-2 mx-8  hover:cursor-pointer"
                >
                    <p>Regresar</p>
                    <svg
                        className="w-20 h-20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="4 5 24 24"
                    >
                        <path
                            d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"
                            fill="#000000"
                            data-name="Left"
                        />
                    </svg>
                </div>
                <div className="flex justify-evenly items-center px-16 pt-10 text-xl">
                    <Link to="/aprender/Suma/Explicacion">Suma</Link>
                    <Link to="/aprender/Resta/Explicacion">Resta</Link>
                    <Link to="/aprender/Multiplicacion/Explicacion">
                        Multiplicación
                    </Link>
                    <Link to="/aprender/Division/Explicacion">División</Link>
                </div>
            </nav>
            <BurgerMenu />
            <h1 className={`font-bold text-5xl md:text-[6rem] text-center text-${OperationsColor(operation)[0]} ${operation == "Multiplicación" && "text-[2rem] md:text-6xl"} `}>
                {operation}
            </h1>
        </div>
    )
}