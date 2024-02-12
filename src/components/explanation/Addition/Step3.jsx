
import additionImg from "../../../Assets/img/Suma.png"
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg"
import curvLeftArro from  "../../../Assets/curvLeftArrow.svg"
import Container from "../container";

//suma
export default function Step3() {
    return (
        <Container img={additionImg} step="3" color="#FEEB70">
            <p className="py-4">Luego sumas la siguiente columna junto con el 1 que agragaste arriba. Si en la casilla no hay ningun numero quiere decir que es 0</p>
            <p>Repite este proceso en cada columna</p>
                    <div className="flex justify-between text-3xl items-center">
                        <div>
                            <p className="pl-11  text-pink">1</p>
                            <div className="flex">
                                <table className="border border-gray-300 border-dashed">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">2</td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">0</td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">3</td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">0</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 className="p-5">+</h1>
                            </div>

                        </div>

                        <embed className="flex justify-center items-center" src={leftArrow}/>

                        <div className="flex flex-col">
                            <p className="py-6 px-8 text-pink">1</p>
                            <div className="flex">
                                <table className="border border-gray-300 border-dashed">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">2</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">0</td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">3</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 className="p-5">+</h1>
                            </div>
                        </div>
                        <embed className="pb-20 pr-20" src={curvLeftArro}/>
                    </div>
        </Container>
    )
}