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
        <div className="pt-5 h-full border border-red-500">
            <Title text={operation} color={OperationsColor(operation)[0]} backButton={true} />
            <Outlet />
        </div>
    )
}

export default LayoutOperation