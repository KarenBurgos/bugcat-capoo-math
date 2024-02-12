import subtractionImg from "../../../Assets/img/subtraction.png"
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg"
import curvLeftArro from "../../../Assets/curvLeftArrow.svg"
import Container from "../container";
import { ArrowAdd } from "../../HoverArrow/Arrows";
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step41() {
    return (
        <Container img={subtractionImg} step="3" color="#FD88BE">
            <p className="py-4 font-medium ">Caso especial</p>
            <p className="py-4">Si el numero de arriba es menor que el de abajo no se puede restar, por lo que hay que prestar</p>
            <p>El número de al lado le presta 1 al de la derecha convirtiendolo en una decena y se le resta ese 1 que presto</p>
            <div className="flex justify-between text-3xl items-center">
                <div>
                    <div className="flex">
                        <table className="border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">3</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">2</td>
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
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">2</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">6</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-4xl text-red-800">x</td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">-</h1>
                    </div>
                </div>
                <ArrowAdd true />
                <div>
                    
                
                    <div className="flex flex-col justify-center items-center">
                    <embed className="p-2" src={CurvArrow} />
                    <div className="flex">
                        <table className="border border-gray-300 border-dashed text-center">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">3<span className="text-amber-400"> -1</span></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 "><span className="text-amber-400">1</span> <span className="text-pink">2</span></td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">1</td>
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


                </div>
            </div>
        </Container>
    )
}