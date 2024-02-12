import Title from "../../Title";
import StepNumber from "../stepNumber";
import additionImg from "../../../Assets/img/Suma.png"
import BackgroundLines from "../../BackgroundLines";
import dog from "../../../Assets/img/addExplanation.gif"
import Container from "../container";
import { ArrowAdd } from "../../../components/HoverArrow/Arrows"

//suma
export default function Explication() {
    return (
        <div className="md:py-10 md:px-20 flex items-start">
            <StepNumber color="#FEEB70" />

            <div className="grid grid-cols-2 w-full">
                <div>
                    <p className="py-4 font-bold text-2xl">Sumar significa agregar</p>
                    <div className="flex items-center">
                        <p className="py-4 pr-2">Si hay 3 perros jugando </p>
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                        <p className="py-4 pl-2">y llegan 2 mas </p>
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                    </div>
                    <div className="flex items-center pt-10">
                        <p>En total tendremos 5 perros </p>
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                        <img className="h-20 w-20" src={dog} />
                    </div>
                </div>
                <div className="flex w-full items-center text-2xl">
                    <ArrowAdd true/>
                    <div className="p-20 flex w-1/3">
                        2 + 3
                    </div>
                    <div className="flex w-full">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">2</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">3</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">5</td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">+</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}