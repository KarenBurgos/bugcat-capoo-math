import { Outlet, useLoaderData } from "react-router-dom"
import Title from "../../components/Title"
import OperationsColor from "../../Assets/OperationsColor"
import { SoundProvider } from "../../components/Sound"

export async function loader({ params }) {
    console.log(params.operation)
    return params.operation
}

function LayoutOperation() {
    const operation = useLoaderData()


    return (
        <SoundProvider>
            <div className="pt-5 h-4/5">
                <Title text={operation} color={OperationsColor(operation)[0]} backButton={true} />
                <Outlet />
            </div>
        </SoundProvider>
    )
}

export default LayoutOperation