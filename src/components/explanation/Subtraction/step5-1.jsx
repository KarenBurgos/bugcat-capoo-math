import subtractionImg from "../../../Assets/img/subtraction.png"
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg"
import curvLeftArro from "../../../Assets/curvLeftArrow.svg"
import Container from "../container";
import { ArrowAdd } from "../../HoverArrow/Arrows";
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step51() {
    return (
        <Container img={subtractionImg} color="#FD88BE">
            <p className="py-4 font-medium ">Caso especial</p>
            <p className="py-4">Si necesitamos prestar y el número de al lado es 0 pedimos prestado del número siguiente</p>
            <div className="flex justify-between text-3xl items-center">
                <div>
                    <div className="flex">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400"></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">-</h1>
                    </div>
                </div>

                <ArrowAdd true />

                <div className="flex flex-col justify-center items-center">
                    <p className="text-4xl text-red-800">x</p>
                <embed src={CurvArrow} />
                    <div className="flex mt-1">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-red-800">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-red-800">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 "></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">-</h1>
                    </div>
                </div>
                <ArrowAdd true />
                <div>
                    
                
                    <div className="flex flex-col justify-center items-center">
                    <div className="flex">
                    <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 "></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">-</h1>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    )
}