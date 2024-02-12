import Title from "../../Title";
import StepNumber from "../stepNumber";
import additionImg from "../../../Assets/img/Suma.png"
import BackgroundLines from "../../BackgroundLines";
import Container from "../container";
import multiplicationImg from "../../../Assets/img/div.png"
import Arrow from "../../../Assets/rightArrow.svg"
import UpArrow from "../../../Assets/upArrow.svg"

export default function step2() {

    return (
        <Container img={multiplicationImg} step="2" color="#9B5ED8">
            <p className="py-4">Tomamos de la <span className="underline text-purple"> ultima fila el  primer número a la derecha</span> y mutiplicamos con todos los números de la primera fila. Empezamos multiplicando con el <span className="underline text-pink ">primer número a la derecha de la primera fila</span>.</p>
            <div className="flex text-3xl flex-col">

                <div className="flex ">
                    <div className="flex relative">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed ">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">5</td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-purple">5</td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-8"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                </tr>
                            </tbody>
                        </table>
                        <embed src={UpArrow} className="h-12 absolute top-14 right-4" />
                    </div>
                    <div className="flex items-start">
                        <h1 className="text-start p-5">x</h1>
                    </div>
                    <embed src={Arrow} className="px-20" />

                    <p className="flex items-center ">5 x 5 = 25</p>
                </div>

                <div className="flex flex-col">
                    <p className="py-4 text-xl">Asi como en la suma si el resultado es igual o mayor a 10 colocamos en la respuesta debajo de la linea el ulimo número y llevamos el primero en la siguiente columna</p>

                    <div className="flex flex-col">
                        <div className="flex ">
                            <div className="flex flex-col relative">
                                <p className="pl-11 text-amber-400">2</p>
                                <div className="flex">
                                    <table className="table-auto border-collapse border border-gray-300 border-dashed">
                                        <tbody>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">5</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-purple">5</td>
                                            </tr>
                                            <tr className="border border-t-4 border-gray-700">
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-8"></td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <embed src={UpArrow} className="h-12 absolute top-24 right-4" />
                                </div>
                                </div>
                                <div className="flex items-start">
                                    <h1 className="text-start p-5 pt-12">x</h1>
                                </div>
                            </div>

                    </div>
                </div>



            </div>
        </Container>
    )
}