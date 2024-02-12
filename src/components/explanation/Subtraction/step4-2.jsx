import subtractionImg from "../../../Assets/img/subtraction.png"
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg"
import curvLeftArro from "../../../Assets/curvLeftArrow.svg"
import Container from "../container";
import { ArrowAdd } from "../../HoverArrow/Arrows";
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step42() {
    return (
        <Container img={subtractionImg} step="3" color="#FD88BE">
            <p className="py-4 font-medium ">Caso especial</p>
            <p className="py-4">En este ejemplo el 3 le presta uno al 2 asi que quedaria 12 y se le resta el 1 que presto al 3 asi que quedaria como 2</p>
            <p>Ahora si 12 es mayor que 6 asi que podemos hacer la resta</p>
            <div className="flex justify-between text-3xl items-center">
                <div>
                    <div className="flex">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">12</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">6</td>
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

                <div className="flex">
                    <div className="flex mt-8">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">12</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">6</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-4xl  text-pink">6</td>
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
                        <table className="border border-gray-300 border-dashed text-center">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">12</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">6</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">6</td>
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