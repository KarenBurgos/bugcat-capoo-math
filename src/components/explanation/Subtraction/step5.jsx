import subtractionImg from "../../../Assets/img/subtraction.png";
import Container from "../container";
import Arrow from "../../../Assets/rightArrow.svg";
import CurvArrow from "../../explanationArrows/CurvArrow.svg";

//resta
export default function Step5() {
    return (
        <Container img={subtractionImg} color="#FD88BE">
            <p className="py-4 font-medium ">Caso especial 3</p>
            <p className="py-4">
                Si necesitamos prestar y el número de al lado es 0 pedimos prestado del
                número siguiente
            </p>
            <section id="container-case-3-sub" className="grid min-[1220px]:flex text-3xl items-end my-10 min-[1220px]:my-0">
                <article className="grid justify-center items-center relative min-[1220px]:flex min-[1220px]:justify-between min-[1220px]:m-0">
                    <article className="flex">
                        <table className="border border-gray-300 border-dashed md:text-2xl min-[1440px]:text-3xl">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                        2
                                    </td>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                        0
                                    </td>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                        7
                                    </td>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                        5
                                    </td>
                                </tr>
                                <tr className="border border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="absolute right-2 top-5 md:grid md:static ">
                            <h1 className="md:p-5">-</h1>
                        </div>
                    </article>
                    <embed src={Arrow} className="mt-10 h-14 rotate-90 min-[1220px]:rotate-0 md:mr-10 w-full min-[1220px]:mt-0"/>
                </article>

                <article className="grid justify-center items-center relative min-[1220px]:flex min-[1220px]:justify-between min-[1220px]:m-0">
                    <article className="grid justify-center items-center">
                        <div className="grid justify-center text-center">
                            <p className="text-4xl text-red-800">x</p>
                            <embed className="md:pb-3 md:pr-8" src={CurvArrow} />
                        </div>
                        <article className="flex mt-1">
                            <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-red-800">
                                            0
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-red-800">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                            7
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                            5
                                        </td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="absolute right-10 top-20 md:grid md:static ">
                                <h1 className="md:p-5">-</h1>
                            </div>
                        </article>
                    </article>
                    <embed src={Arrow} className="my-10 h-16 rotate-90 min-[1220px]:rotate-0 md:mr-10 w-full"/>
                </article>

                <article>
                    <article className="flex flex-col justify-center items-center relative">
                        <article className="flex">
                            <table className="border border-gray-300 border-dashed md:text-2xl min-[1900px]:text-3xl">
                                <tbody>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">
                                            2
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                            0
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                            7
                                        </td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                            5
                                        </td>
                                    </tr>
                                    <tr className="border border-t-4 border-gray-700">
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5 "></td>
                                        <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5 "></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="absolute right-2 top-5 md:grid md:static ">
                                <h1 className="md:p-5">-</h1>
                            </div>
                        </article>
                    </article>
                </article>
            </section>

            <section id="container-case-2-sub">
                <p className="py-4 font-medium">Caso especial 4</p>
                <p className="py-4"> Primero se presta 1 a el número que se tiene a la derecha y se resta el 1 que acaba de prestar (en este caso el 2 queda como 1 y el 0 como 10)</p>
                <p className="py-4">  Ahora si se puede pedir prestado 1 al 10 y se realiza la resta </p>
                <section className="grid justify-center items-end relative my-10 min-[1220px]:flex min-[1220px]:justify-between">
                    <article className="grid min-[1220px]:flex relative">
                        <div className="grid">
                        <div className="w-full grid justify-start ">
                                <embed className="pb-2 h-8 pl-5" src={CurvArrow} />
                            </div>
                            <article className="flex justify-center">
                                <table className="whitespace-nowrap border border-gray-300 border-dashed md:text-[1.30rem] min-[1900px]:text-3xl">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-5 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">
                                                2-1
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">
                                                10
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                7
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                5
                                            </td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="absolute right-0 top-10 md:grid md:static ">
                                    <h1 className="md:p-5">-</h1>
                                </div>
                            </article>
                        </div>
                        <embed src={Arrow} className="my-10 h-16 rotate-90 min-[1220px]:rotate-0 md:mr-10 w-full"/>
                    </article>

                    <article className="grid min-[1220px]:flex relative">
                        <div className="grid justify-start items-start">
                            <div className="w-full grid justify-center ">
                                <embed className="pb-2 h-8 pl-20 md:pl-5" src={CurvArrow} />
                            </div>
                            <article className="flex justify-center">
                                <table className="whitespace-nowrap border border-gray-300 border-dashed md:text-[1.30rem] min-[1900px]:text-3xl">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">
                                                1
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">
                                                10-1
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">
                                                10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                7
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                5
                                            </td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-4 py-6 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="absolute right-0 top-10 md:grid md:static ">
                                    <h1 className="md:p-5">-</h1>
                                </div>
                            </article>
                        </div>
                        <embed src={Arrow} className="my-10 h-16 rotate-90 min-[1220px]:rotate-0 md:mr-10 w-full"/>
                    </article>

                    <article>
                        <article className="flex flex-col justify-center items-center relative">
                            <article className="flex justify-center">
                                <table className="border border-gray-300 border-dashed md:text-[1.30rem] min-[1900px]:text-3xl">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">
                                                1
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-amber-400">
                                                9
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5"></td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                7
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5">
                                                5
                                            </td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">
                                                1
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">
                                                2
                                            </td>
                                            <td className="border border-2 border-gray-400 border-dashed px-6 py-4 min-[1900px]:px-10 min-[1900px]:py-5 text-pink">
                                                5
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="absolute right-1 top-3 md:grid md:static ">
                                    <h1 className="md:p-5">-</h1>
                                </div>
                            </article>
                        </article>
                    </article>
                </section>
            </section>
        </Container>
    );
}
