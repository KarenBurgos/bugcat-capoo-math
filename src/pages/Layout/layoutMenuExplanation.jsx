import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import OperationsColor from "../../Assets/OperationsColor"
import { SoundProvider } from "../../components/Sound";

export async function loader({ params }) {
    return params
}

export default function LayoutMenuExplanation() {
    const params = useLoaderData()
    const navigation = useNavigate()
    let operation = params.operation

    if(operation == "Multiplicacion"){
        operation = "Multiplicación"
    }
    else if (operation == "Division"){
        operation = "División"
    }

    return (
        <SoundProvider>
            <nav>
                <div onClick={()=>{navigation("/")}} className="absolute z-10 md:mt-2 mx-8  hover:cursor-pointer">
                    <p>Regresar</p>
                    <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="4 5 24 24">
                        <path d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z" fill="#000000" data-name="Left" />
                    </svg>
                </div>
                <div className="flex justify-evenly items-center px-16 py-10 text-xl">
                    <Link to="/aprender/Suma/Explicacion">Suma</Link>
                    <Link to="/aprender/Resta/Explicacion">Resta</Link>
                    <Link to="/aprender/Multiplicacion/Explicacion">Multiplicación</Link>
                    <Link to="/aprender/Division/Explicacion">División</Link>
                </div>
            </nav>

            <Title text={operation} color={OperationsColor(operation)[0]} />
            <div class="h-4/6">

            <Outlet />
            </div>
        </SoundProvider>
    )
}