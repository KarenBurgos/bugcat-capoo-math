import subtractionImg from "../../../Assets/img/subtraction.png"
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg"
import curvLeftArro from  "../../../Assets/curvLeftArrow.svg"
import Container from "../container";

//resta
export default function Step2() {
    return (
        <Container img={subtractionImg} step="2" color="#FD88BE">
            <p className="py-4">Empezamos a restar de derecha a izquierda, pero primero nos aseguramos que el número de arriba sea mayor que el de abajo para poder restar</p>
                    <div className="flex justify-center md:justify-between text-3xl items-center relative">
                        <div>
                            <div className="flex">
                                <table className="border border-gray-300 border-dashed">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-rose-400">5</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-rose-400">4</td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-rose-400">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="absolute right-2 top-5 md:grid md:static">
                                    <h1 className="md:p-5">-</h1>
                                </div>
                            </div>
                        </div>
                    </div>
        </Container>
    )
}