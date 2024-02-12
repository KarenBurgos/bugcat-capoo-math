import CompletedImg from "../../../Assets/img/div.gif"
import BackgroundLines from "../../BackgroundLines"

//div
export default function Step8() {
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <p className="text-3xl">¡Completado!</p>
            <div className="flex flex-col h-full justify-evenly items-center relative ">
                <img className="" src={CompletedImg} />
                <BackgroundLines full={true} />
            </div>
        </div>
    )
}