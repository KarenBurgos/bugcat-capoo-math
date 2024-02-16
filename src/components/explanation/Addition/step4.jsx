import CompletedImg from "../../../Assets/img/SumaCompleto.gif"
import BackgroundLines from "../../BackgroundLines"

//suma
export default function Step4() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-full">
            <p className="text-3xl">¡Completado!</p>
            <div className="flex relative ">
                <img className="h-[50vh]" src={CompletedImg} />
                <BackgroundLines full={true} />
            </div>
        </div>
    )
}