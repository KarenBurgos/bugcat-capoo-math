import Title from "../../Title";
import StepNumber from "../stepNumber";
import subtractionImg from "../../../Assets/img/subtraction.png"
import BackgroundLines from "../../BackgroundLines";
import Container from "../container";

//resta
export default function Step1() {
    return (
        <Container img={subtractionImg} step="1" color="#FD88BE">
            <p className="py-4">Ordena los números uno debajo del otro</p>
            <div className="flex text-2xl relative justify-center md:justify-start">
                <table className="table-auto border-collapse border border-gray-300 border-dashed">
                    <tbody>
                        <tr>
                            <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                        </tr>
                        <tr>
                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">1</td>
                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5">4</td>
                        </tr>
                        <tr className="border border-t-4 border-gray-700">
                            <td className="border border-2 border-gray-400 border-dashed px-10 py-8"></td>
                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="absolute right-2 top-5 md:grid md:static">
                    <h1 className="md:p-5">-</h1>
                </div>
            </div>
        </Container>
    )
}