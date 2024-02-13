import { Outlet, useLoaderData } from "react-router-dom"
import Title from "../../components/Title"
import OperationsColor from "../../Assets/OperationsColor"
import { SoundProvider } from "../../components/Sound"
import SubTitle from "../../components/SubTitle"

export async function loader({ params }) {
    console.log(params.operation)
    return params.operation
}

function LayoutOperation() {
    const operation = useLoaderData()

    return (
            <div className="grid grid-rows-[20vh,80vh] md:grid-rows-[30vh,70vh]">
                <div>
                    <Title text={operation} color={OperationsColor(operation)[0]} backButton={true} >
                    <SubTitle text={"Escoje la dificultad"} />
                        </Title>

                </div>
                <div className="h-[80vh] w-full flex flex-col items-center md:h-full">
                    <Outlet />    
                </div>
                
            </div>
    )
}

export default LayoutOperation