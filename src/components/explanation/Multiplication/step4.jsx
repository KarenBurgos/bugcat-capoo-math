import Title from "../../Title";
import StepNumber from "../stepNumber";
import additionImg from "../../../Assets/img/Suma.png"
import BackgroundLines from "../../BackgroundLines";
import Container from "../container";
import multiplicationImg from "../../../Assets/img/div.png"
import Arrow from "../../../Assets/rightArrow.svg"
import CurvArrow from "../../../Assets/curvLeftArrow.svg"

export default function step4() {
    return (
        <Container img={multiplicationImg} step="4" color="#9B5ED8">
            <p className="py-4">Ahora que ya multiplicamos el primer número con todos los números de la columna de arriba  tomamos el siguiente número de la ultima columna y la multiplicamos con todos los numero de arriba como lo hicimos antes, <span className="underline text-pink">empezando por la derecha.</span></p>
            <div className="flex text-3xl items-center justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <div className="flex relative">
                            <table className="table-auto border-collapse border border-gray-300 border-dashed">
                                <tbody>
                                    <tr>
                                        <td ></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">5</td>
                                    </tr>
                                    <tr>
                                        <td ></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-purple" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>1</td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>5</td>
                                    </tr>
                                    <tr >
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    </tr>
                                </tbody>
                            </table>
                            <embed src={Arrow} className="h-14 absolute top-14 left-40 -rotate-45" />

                        </div>
                        <div className="flex items-start">
                            <h1 className="text-start p-5">x</h1>
                        </div>
                    </div>
                </div>
                <embed src={Arrow} />

                <p>5 x 1 = 5</p>
            </div>
            <div>
                <p className="py-10">Pero para colocar el resultado debemos de dejar un espacio en blanco de la siguiente manera:</p>
                <di v className="flex items-end">
                    <div className="flex">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed text-3xl">
                            <tbody>
                                <tr>
                                    <td ></td>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">5</td>
                                </tr>
                                <tr>
                                    <td ></td>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 px-10 py-5 border-dashed border-b-gray-700 text-purple" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>1</td>
                                    <td className="border border-2 border-gray-400 px-10 py-5  border-dashed border-b-gray-700" style={{ borderBottom: "4px solid " }}>5</td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">x</h1>
                    </div>
                    <embed src={CurvArrow} className="h-20 rotate-12"/>

                </di>
            </div>
        </Container>
    )
}