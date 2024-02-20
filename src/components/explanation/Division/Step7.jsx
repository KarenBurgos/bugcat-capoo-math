import Title from "../../Title";
import StepNumber from "../stepNumber";
import divImg from "../../../Assets/img/div.png"
import Container from "../container";
import ShowDivisionParts from "./divisionParts";
import Arrow from "../../../Assets/rightArrow.svg"

export default function step7() {
    return (
        <div>
            <Container img={divImg} step="" color="#98E6E6">
                <h2 className="py-4 text-2xl font-bold">Caso especial 4</h2>
                <p>Colocar un 0 en el cociente para bajar mas de 1 número</p>
                <div className="flex w-full items-center">
                    <p className="whitespace-nowrap">Veamos el siguiente ejemplo 1050 ÷ 10</p>
                    <div className="ml-5 w-full">
                        <ShowDivisionParts />
                    </div>
                </div>

                <p className="my-5">Empezamos tomando dos dígitos del dividendo ya que le dividos tien 2 dígitos y realizamos la división</p>
                <table className="grid justify-center md:justify-start">
                    <tr>
                        <td className="px-5 py-1 pl-7"><span className="text-blue-medium">10</span>50</td>
                        <td className="px-5 py-1 text-blue-medium" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>10</td>
                    </tr>
                    <tr>
                        <td className="px-5 py-1 underline ">-10</td>
                        <td className="px-5 pl-7 py-1">1</td>
                    </tr>
                    <tr>
                        <td className="px-5 py-1 pl-9 ">0</td>
                        <td className="px-5 pl-7 py-1"></td>
                    </tr>
                </table>
                <p className="my-5">Ahora bajamos el siguiente número. Aqui nos damos cuenta que no podemos dividir 5 entre 10 ya que el 5 es menor, pero aun tenemos un 0 en el dividendo que podemos bajar</p>
                <table className="grid justify-center md:justify-start">
                    <tr>
                        <td className="px-5 py-1 pl-7">1050</td>
                        <td className="px-5 py-1 text-blue-medium" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>10</td>
                    </tr>
                    <tr>
                        <td className="px-5 py-1 underline">-10</td>
                        <td className="px-5 py-1">1</td>
                    </tr>
                    <tr>
                        <td className="px-5 py-1 pl-9 ">0 <span className="text-blue-medium">5</span></td>
                        <td className="px-5 pl-7 py-1"></td>
                    </tr>
                </table>
                <p className="my-5">Para bajar ese 0 y que nos quede 50 entre 10 tenemos que poner primero un 0 al cociente</p>
                <div className="grid md:flex items-center w-full md:justify-start">
                    <table className="grid justify-center">
                        <tr>
                            <td className="px-5 py-1 pl-7">1050</td>
                            <td className="px-5 py-1 text-blue-medium" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>10</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-1 underline">-10</td>
                            <td className="px-5 py-1">10</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-1 pl-9 text-blue-medium">050</td>
                            <td className="px-5 pl-7 py-1"></td>
                        </tr>
                    </table>
                    <div className="px-10 flex justify-center my-10 md:m-0">
                        <embed src={Arrow} className=" rotate-90 md:rotate-0" />
                    </div>
                    <table className="grid justify-center items-start my-5">
                        <tr>
                            <td className="px-5 py-1 pl-7">1050</td>
                            <td className="px-5 py-1" style={{ borderBottom: "2px solid  rgb(55 65 81)", borderLeft: "2px solid  rgb(55 65 81)" }}>10</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-1 underline">-10</td>
                            <td className="px-5  py-1 text-blue-medium">105</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-1 pl-9 ">-050</td>
                            <td className="px-5 pl-7 py-1"></td>
                        </tr>
                        <tr>
                            <td className="px-5 py-1 pl-10 underline">050</td>
                            <td className="px-5 pl-7 py-1"></td>
                        </tr>
                        <tr>
                            <td className="px-5 py-1 pl-14 text-blue-medium">0</td>
                            <td className="px-5 pl-7 py-1"></td>
                        </tr>
                    </table>
                </div>

                <p>Por lo que la respuesta a la division 1050 ÷ 10 es: <p className="text-blue-medium">Cociente= 105, residuo= 0</p></p>
                <div className="my-10 p-10 bg-yellow-dark bg-opacity-20">
                    <p>Al iniciar la división podemos tomar mas dígitos para poder dividir sin agregar un 0 al cociente. Este 0 se agrega solo cuando ya hemos empezado a dividir y necesitemos bajar otro número</p>
                </div>


            </Container>
        </div>
    )
}