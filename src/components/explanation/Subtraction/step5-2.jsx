import subtractionImg from "../../../Assets/img/subtraction.png"
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg"
import curvLeftArro from "../../../Assets/curvLeftArrow.svg"
import Container from "../container";
import { ArrowAdd } from "../../HoverArrow/Arrows";
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step52() {
    return (
        <Container img={subtractionImg} color="#FD88BE">
            <p className="py-4 font-medium ">Caso especial</p>
            <p className="py-4">Primero se presta 1 a el número que se tiene a la derecha y se resta el 1 que acaba de prestar (en este caso el 2 queda como 1 y el 0 como 10)</p>
            <p className="py-4">Ahora si se puede pedir prestado 1 al 10 y se realiza la resta</p>
            <div className="flex justify-between text-3xl items-center">
                <div>
                <embed  className="pl-16" src={CurvArrow} />
                    <div className="flex">
                        
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400">2-1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-pink">10</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400"></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">-</h1>
                    </div>
                </div>

                <ArrowAdd true />

                <div>
                <embed  className="pl-48" src={CurvArrow} />
                    <div className="flex">
                        
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400">10-1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-pink">10</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400"></td>
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
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-amber-400">9</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">10</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-pink">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-pink">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-8 py-5 text-pink">5</td>
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