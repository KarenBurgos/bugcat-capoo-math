import subtractionImg from "../../../Assets/img/subtraction.png";
import BackgroundLines from "../../BackgroundLines";
import leftArrow from "../../../Assets/leftArrow.svg";
import curvLeftArro from "../../../Assets/curvLeftArrow.svg";
import Container from "../container";
import Arrow from "../../../Assets/rightArrow.svg";
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step4() {
    return (
        <Container img={subtractionImg} step="" color="#FD88BE">
            <div>
                <p className="py-4 font-medium ">Caso especial 1</p>
                <p className="py-4">
                    Si el numero de arriba es menor que el de abajo no se puede restar,
                    por lo que hay que prestar
                </p>
                <p>
                    El número de al lado le presta 1 al de la derecha convirtiendolo en
                    una decena y se le resta ese 1 que presto
                </p>
                <section id="container-case-1" className="grid md:flex text-3xl items-end md:my-0">
                    <section className="grid justify-center items-center relative my-10 md:flex md:justify-between md:m-0">
                        <div className="flex">
                            <table className="border border-gray-300 border-dashed">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                                            3
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                            2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                                            1
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-10"></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-10 text-amber-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="absolute right-2 top-5 md:grid md:static ">
                                <h1 className="md:p-5">-</h1>
                            </div>
                        </div>
                        <embed src={Arrow} className="mt-10 h-16 rotate-90 md:rotate-0 md:mr-10 w-full" />
                    </section>

                    <section className="grid justify-center items-center relative mb-10 md:flex md:justify-between md:m-0">
                        <section className="flex">
                            <table className="border border-gray-300 border-dashed">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                            2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-4xl text-red-800">
                                            x
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="absolute right-14 top-5 md:grid md:static">
                                <h1 className="md:p-5">-</h1>
                            </div>
                        </section>
                        <embed src={Arrow} className="mt-10 h-16 rotate-90 w-full md:rotate-0 md:mr-10" />
                    </section>

                    <section className="grid md:flex mt-5 mb-10 justify-center md:justify-between relative md:mb-0">
                        <section className="flex flex-col justify-center items-center">
                            <embed className="p-2" src={CurvArrow} />
                            <div className="flex">
                                <table className="border border-gray-300 border-dashed text-center">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-5 py-5 min-[1440px]:px-10">
                                                3<span className="text-amber-400"> -1</span>
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed md:px-5 py-5 ">
                                                <span className="text-amber-400">1</span>{" "}
                                                <span className="text-pink">2</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">
                                                1
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                6
                                            </td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-10"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-10 text-amber-400"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="absolute right-3 top-16 md:grid md:static">
                                    <h1 className="md:p-5">-</h1>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section id="container-case-1" className="md:my-2">
                    <p className="py-4 font-medium md:mt-5">Caso especial 2</p>
                    <p className="pb-4">
                        En este ejemplo el 3 le presta uno al 2 asi que quedaria 12 y se le
                        resta el 1 que presto al 3 asi que quedaria como 2
                    </p>
                    <p>Ahora si 12 es mayor que 6 asi que podemos hacer la resta</p>
                    <div className="md:my-5">
                        <section id="container-case-2" className="grid md:flex text-3xl items-end md:my-1">
                            <section className="grid justify-center items-center relative mt-10  md:flex md:justify-between md:m-0">
                                <div className="flex">
                                    <table className="border border-gray-300 border-dashed">
                                        <tbody>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                                                    2
                                                </td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                                                    1
                                                </td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                    6
                                                </td>
                                            </tr>
                                            <tr className="border border-t-4 border-gray-700">
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-10"></td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-10"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="absolute right-0 top-5 md:grid md:static">
                                        <h1 className="md:p-5">-</h1>
                                    </div>
                                </div>
                                <embed src={Arrow} className="mt-10 h-16 rotate-90 w-full md:rotate-0 md:mr-10 md:mt-0" />
                            </section>
                        
                            <section className="grid justify-center items-center relative my-10 md:flex md:justify-between md:m-0">
                                <section className="flex">
                                    <table className="border border-gray-300 border-dashed">
                                        <tbody>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                    6
                                                </td>
                                            </tr>
                                            <tr className="border border-t-4 border-gray-700">
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-4xl  text-pink">
                                                    6
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="absolute right-14 top-5 md:grid md:static">
                                        <h1 className="md:p-5">-</h1>
                                    </div>
                                </section>
                                <embed src={Arrow} className="mt-10 h-16 rotate-90 w-full md:rotate-0 md:mr-10 md:mt-0" />
                            </section>
                        
                        
                            <section className="grid md:flex my-5 justify-center md:justify-between relative md:m-0">
                                <section className="flex">
                                    <table className="border border-gray-300 border-dashed text-center">
                                        <tbody>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                                                    2
                                                </td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 ">
                                                    1
                                                </td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                                                    6
                                                </td>
                                            </tr>
                                            <tr className="border border-t-4 border-gray-700">
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                    1
                                                </td>
                                                <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                                                    6
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="absolute right-0 top-5 md:grid md:static">
                                        <h1 className="md:p-5">-</h1>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </div>
                </section>
            </div>
        </Container>
    );
}
