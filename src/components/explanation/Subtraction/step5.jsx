import subtractionImg from "../../../Assets/img/subtraction.png"
import Container from "../container";
import Arrow from "../../../Assets/rightArrow.svg"
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step5() {
    return (
        <Container img={subtractionImg} color="#FD88BE">
            <p className="py-4 font-medium ">Caso especial 1</p>
            <p className="py-4">Si necesitamos prestar y el número de al lado es 0 pedimos prestado del número siguiente</p>
            <div className="flex justify-between text-3xl items-center">
                <div>
                    <div className="flex">
                        <table className="border border-gray-300 border-dashed md:text-2xl min-[1440px]:text-3xl">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400"></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="md:pl-2 md:pt-5 min-[1900px]:p-5">-</h1>
                    </div>
                </div>

                <embed src={Arrow} />

                <div className="flex flex-col justify-center items-center">
                    <p className="text-4xl text-red-800">x</p>
                    <embed className="md:pb-3 md:pr-8" src={CurvArrow} />
                    <div className="flex mt-1">
                        <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-red-800">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-red-800">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">7</td>
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 "></td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className="md:pl-2 md:pt-5 min-[1900px]:p-5">-</h1>
                    </div>
                </div>
                <embed src={Arrow} />
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex">
                            <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">2</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">0</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">7</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">5</td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 "></td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1 className="md:pl-2 md:pt-5 min-[1900px]:p-5">-</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="py-4 font-medium ">Caso especial 2</p>
                <p className="py-4">Primero se presta 1 a el número que se tiene a la derecha y se resta el 1 que acaba de prestar (en este caso el 2 queda como 1 y el 0 como 10)</p>
                <p className="py-4">Ahora si se puede pedir prestado 1 al 10 y se realiza la resta</p>
                <div className="flex justify-between text-3xl items-center">
                    <div>
                        <embed className="md:pb-3 md:pl-8 min-[1990px]:pl-14" src={CurvArrow} />
                        <div className="flex">
                            <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">2-1</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">10</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">7</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">5</td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1 className="md:pl-2 md:pt-5 min-[1900px]:p-5">-</h1>
                        </div>
                    </div>
                    <embed src={Arrow} />
                    <div>
                        <embed className="md:pb-3 md:pl-8 min-[1990px]:pl-14" src={CurvArrow} />
                        <div className="flex">
                            <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">1</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">10-1</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">7</td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">5</td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed md:px-4 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1 className=" md:pl-2 md:pt-5 min-[1900px]:p-5">-</h1>
                        </div>
                    </div>
                    <embed src={Arrow} />
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex">
                                <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">1</td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">9</td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">7</td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5">5</td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">1</td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">2</td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-6 md:py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">5</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 className="md:pl-2 md:pt-5 min-[1900px]:p-5">-</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}