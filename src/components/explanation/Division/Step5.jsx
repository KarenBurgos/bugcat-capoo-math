import Title from "../../Title";
import StepNumber from "../stepNumber";
import divImg from "../../../Assets/img/div.png"
import Container from "../container";
import ShowDivisionParts from "./divisionParts";
import Arrow from "../../../Assets/rightArrow.svg"

export default function step4() {
    return (
        <div>
            <Container img={divImg} step="" color="#98E6E6">
                <h2 className="text-2xl font-bold">Caso especial 1</h2>
                <p>Si no hay un número que al multiplicarlo con el dividendo nos de igual al divisor tenemos que buscar el número mas cercano y pero que sea menor</p>
                <div className="flex items-center w-full">
                    <p className="whitespace-nowrap">Por ejemplo 7 ÷ 2</p>
                    <div className="ml-5 w-full">
                        <ShowDivisionParts />
                    </div>
                </div>

                <section className="grid md:flex items-center">
                    <div>
                        <p className="py-2">2 x 1 = 2</p>
                        <p className="py-2">2 x 2 = 4</p>
                        <div className="flex items-center text-blue-medium">
                            <p>2 x 3 = 6</p>
                            <p className="text-5xl px-2">←</p>
                            <p>mas cercano a 7</p>
                        </div>
                        <div className="flex items-center text-rose-600">
                            <p>2 x 4 = 8</p>
                            <p className="text-5xl px-2">←</p>
                            <p>se pasa de 7</p>
                        </div>

                    </div>
                    <div className="rotate-90 my-8 flex justify-center md:rotate-0 md:m-0">
                        <embed src={Arrow} className="px-10" />
                    </div>
                    <table className="grid justify-center mt-5 md:m-0">
                        <tr>
                            <td className="px-5 py-1 pl-7">7</td>
                            <td className="px-5 py-1" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>2</td>
                        </tr>
                        <tr>
                            <td className="px-5 underline decoration-black"><span className="text-customBlack">-</span>6</td>
                            <td className="px-5 text-blue-medium">3</td>
                        </tr>
                        <tr>
                            <td className="px-5 pl-7 py-1 text-blue-medium">1</td>
                            <td className="px-5 pl-7 py-1 text-blue-medium"></td>
                        </tr>
                    </table>

                </section>
                <div className="my-8 md:my-10">
                    <p>Ya que no podemos seguir dividiendo porque lo que nos queda es menor al divisor este es el residuo. Por lo que la respuesta a la division 7 ÷ 2 es: <span className="text-blue-medium">Cociente= 3, residuo= 1</span></p>
                </div>

            </Container>
        </div>
    )
}