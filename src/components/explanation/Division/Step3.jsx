import Title from "../../Title";
import StepNumber from "../stepNumber";
import divImg from "../../../Assets/img/div.png"
import Container from "../container";
import ShowDivisionParts from "./divisionParts";
import Arrow from "../../../Assets/rightArrow.svg"

export default function step3() {
    return (
        <div>
            <Container img={divImg} step="3" color="#98E6E6">
                
                <p>Ahora restamos el 8 del dividendo con el 4 que resulto de la multiplicación</p>
                <div className="flex my-10 w-full">
                    <div>
                        <table>
                            <tr>
                                <td className="px-5 py-1"><span className="text-blue-medium pl-2">8</span>2</td>
                                <td className="px-5 py-1 text-blue-medium" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>2</td>
                            </tr>
                            <tr>
                                <td className="px-5  text-blue-medium underline decoration-black"><span className="text-customBlack">-</span>8</td>
                                <td className="px-5  text-blue-medium">4</td>
                            </tr>
                            <tr>
                                <td className="px-5 pl-7">0</td>
                                <td ></td>
                            </tr>
                        </table>
                    </div>
                    <div className="md:pl-10 w-full">
                        <ShowDivisionParts />
                    </div>
                </div>

                <section>
                    <p>Luego de colocar el resultado de la resta bajamos el siguiente número del divisor a la par</p>
                     <div className="my-10">
                        <table>
                            <tr>
                                <td className="px-5 py-1"><span className="text-blue-medium pl-2 pr-1">8</span>2</td>
                                <td className="px-5 py-1 text-blue-medium" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>2</td>
                            </tr>
                            <tr>
                                <td className="px-5  text-blue-medium underline decoration-black"><span className="text-customBlack">-</span>8</td>
                                <td className="px-5  text-blue-medium">4</td>
                            </tr>
                            <tr>
                                <td className="px-5 pl-7">0 2</td>
                                <td ></td>
                            </tr>
                        </table>
                    </div>
                </section>
                <section className="my-5">
                    <p>Ahora tomamos el número que tenemos abajo el nuevo dividendo (si el residuo fuera 1 y bajaramos el 2 el nuevo dividendo seria 12) y realizamos el mismo proceso para dividir</p>
                    <table className="my-10">
                            <tr>
                                <td className="px-5 py-1"><span className="pl-2 pr-1">8</span>2</td>
                                <td className="px-5 py-1 text-blue-medium" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>2</td>
                            </tr>
                            <tr>
                                <td className="px-5 underline decoration-black"><span className="text-customBlack">-</span>8</td>
                                <td className="px-5">4</td>
                            </tr>
                            <tr>
                                <td className="px-5 pl-7 text-blue-medium">0 2</td>
                                <td ></td>
                            </tr>
                        </table>
                </section>
            </Container>
        </div>
    )
}