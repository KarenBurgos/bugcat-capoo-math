import StepNumber from "../stepNumber";
import Container from "../container";
import { ArrowAdd } from "../../HoverArrow/Arrows"
import explanation1 from "../../../Assets/img/restaExplicación1.png"
import explanation2 from "../../../Assets/img/restaExplicación2.png"
import explanation3 from "../../../Assets/img/restaExplicación3.png"

//suma
export default function Explication() {
    return (
        <div className="md:py-10 md:px-20 flex items-start">
            <StepNumber color="#FD88BE" />

            <div className="grid grid-cols-2 w-full">
                <div>
                    <p className="py-4 font-bold text-2xl">Restar significa quitar o disminuir</p>
                    <div className="flex items-center">
                        <p className="py-4 pr-2">Si tenemos 3 sandias </p>
                        <img className="h-1/3 w-1/3" src={explanation1} />
                        <p className="py-4 pl-2">y nos comemos 2 </p>
                        <img className="h-1/3 w-1/3" src={explanation2} />
                    </div>
                    <div className="flex items-center pt-10">
                        <p>No quedara solo una sandia </p>
                        <img className="h-20 w-16" src={explanation3} />
                    </div>
                </div>
                <div className="flex w-full items-center text-2xl">
                    <ArrowAdd true/>
                    <div className="p-20 flex w-1/3">
                        3 - 2
                    </div>
                    <div className="flex w-full">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">3</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">2</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">-</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}