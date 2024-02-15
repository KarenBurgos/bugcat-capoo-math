import CompletedImg from "../../../Assets/img/SumaCompleto.gif"
import BackgroundLines from "../../BackgroundLines"

//suma
export default function Step4() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-full border border-4 boder-pink">
            <p className="text-3xl">¡Completado!</p>
            <div className="flex h-1/2 relative ">
                <img className="h-1/2" src={CompletedImg} />
                <BackgroundLines full={true} />
            </div>
        </div>
    )
}