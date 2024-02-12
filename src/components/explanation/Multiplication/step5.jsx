import Title from "../../Title";
import StepNumber from "../stepNumber";
import additionImg from "../../../Assets/img/Suma.png"
import BackgroundLines from "../../BackgroundLines";
import Container from "../container";
import multiplicationImg from "../../../Assets/img/div.png"
import Arrow from "../../../Assets/rightArrow.svg"

export default function step5() {
    return (
        <Container img={multiplicationImg} step="5" color="#9B5ED8">
            <p className="py-4">Luego multiplicamos con el siguiente numero de la primera columna. </p>
            <div className="flex text-3xl items-center justify-between">
                <div className="flex">
                    <div className="flex relative">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed bg-white" >
                            <tbody>
                                <tr>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 text-pink">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">5</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="border border-2 border-gray-400 px-10 py-5 border-dashed border-b-gray-700 text-purple" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>1</td>
                                    <td className="border border-2 border-gray-400 px-10 py-5  border-dashed border-b-gray-700" style={{ borderBottom: "4px solid " }}>5</td>
                                </tr>
                                <tr >
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr >
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <embed src={Arrow} className="h-10 absolute top-16 left-32 -rotate-90" />

                    </div>
                    <div className="flex items-start">
                        <h1 className="text-start p-5">x</h1>
                    </div>
                </div>
                <embed src={Arrow} />
                <p>2 x 1 = 2</p>

                <embed src={Arrow} />
                <div className="flex flex-col">
                    <div className="flex">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed bg-white">
                            <tbody>
                                <tr>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 text-pink">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">5</td>
                                </tr>
                                <tr>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 px-10 py-5 border-dashed border-b-gray-700 text-purple" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>1</td>
                                    <td className="border border-2 border-gray-400 px-10 py-5  border-dashed border-b-gray-700" style={{ borderBottom: "4px solid " }}>5</td>
                                </tr>
                                <tr >
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr >
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="p-5">x</h1>
                    </div>
                </div>

            </div>

            <div>


                <p className="py-10">Para calcular el resultado ahora debemos sumar los números que nos dieron como resultados de la multiplicación por cada fila. Trazamos una linea debajo y sumamos (cada espacio en blanco significa que es un 0)</p>
                <div className="flex flex-col text-3xl">
                    <div className="flex">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed bg-white">
                            <tbody>
                                <tr>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 px-10 py-5 border-dashed border-b-gray-700" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>1</td>
                                    <td className="border border-2 border-gray-400 px-10 py-5  border-dashed border-b-gray-700" style={{ borderBottom: "4px solid " }}>5</td>
                                </tr>
                                <tr className="text-pink">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                </tr>
                                <tr className="border border-b-4 border-solid border-b-gray-700 text-pink">

                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td></td>
                                </tr>
                                <tr className="text-amber-400">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">3</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="grid grid-rows-2">
                            <h1 className="p-5">x</h1>
                            <h1 className="p-5">+</h1>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    )
}