import Title from "../../Title";
import StepNumber from "../stepNumber";
import divImg from "../../../Assets/img/div.png"
import Container from "../container";
import ShowDivisionParts from "./divisionParts";

export default function step1() {
    return (
        <div>
            <p className="text-center text-4xl">Realicemos la operación 82 ÷ 2</p>
            <Container img={divImg} step="1" color="#98E6E6">
                <section id="div-1">
                    <p className="py-4">Ordenar ambos números para dividir</p>
                    <p className="py-4">El número que esta a la izquierda del simbolo de división es el dividendo y el que esta a la derecha es el divisor</p>
                </section >

                <section id="div-1-operation">
                    <table>
                        <tr>
                            <td className="px-5 py-2">82</td>
                            <td className="px-5 py-2" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>2</td>
                        </tr>
                    </table>
                </section>

                <div className="md:pt-20">
                    <p>Da click para recordar las partes de la suma: </p>

                    <ShowDivisionParts />
                </div>
            </Container>
        </div>
    )
}