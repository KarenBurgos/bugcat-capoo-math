
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
                    <section className="w-full grid md:flex justify-center md:justify-between text-3xl items-center">
                        <section>
                            <p className="pl-11  text-pink">1</p>
                            <div className="flex ">
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
                        </section>
                        <section className="w-full flex items-center justify-center py-14">
                            <embed className="-rotate-90 md:p-0 md:rotate-0 flex justify-center items-center" src={leftArrow}/>
                        </section>
                        <section className="relative flex flex-col justify-center items-center w-full">
                            <p className="py-3 md:px-11 text-pink">1</p>
                            <div className="flex ">
                                <table className="border border-gray-300 border-dashed ">
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
                                <div className="absolute right-12 top-20 md:grid md:static">
                                    <h1 className="md:p-5">+</h1>
                                </div>
                            </div>
                        </section>
                        <embed className="hidden md:inline-flex pb-20 pr-20" src={curvLeftArro}/>
                    </section>
        </Container>
    )
}