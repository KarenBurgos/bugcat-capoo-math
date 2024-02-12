import Container from "../container";
import multiplicationImg from "../../../Assets/img/div.png"
import Arrow from "../../../Assets/rightArrow.svg"

export default function step6() {
    return (
        <Container img={multiplicationImg} step="" color="#9B5ED8">
            <h2 className="py-4 text-2xl font-bold">A tomar en cuenta</h2>
            <p className="py-4">1. Si multiplicamos cualquier numero por 0 el resultado es 0</p>
            <div className="flex text-3xl items-center justify-between">
                <div className="flex">
                    <div className="flex relative">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">1</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                                <tr>
                                    <td ></td>
                                    <td ></td>
                                    <td className="border border-2 border-gray-400 px-10 py-5  border-dashed border-b-gray-700" >5</td>
                                </tr>
                                <tr className="border border-solid border-t-4 border-gray-700">
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-start">
                        <h1 className="text-start p-5">x</h1>
                    </div>
                </div>
                <embed src={Arrow} />
                <p>5 x 0 = 0</p>
                <p>5 x 0 = 0</p>
                <p>5 x 1 = 5</p>
            </div>

            <div>
                <p className="py-10">2. Cada vez que tomemos un nuevo numero de la ultima fila vamos dejando un espacio en blanco en la respuesta</p>
                <div className="flex flex-col text-3xl">
                    <div className="flex">
                        <table className="table-auto border-collapse border border-gray-300 border-dashed">
                            <tbody>
                                <tr>
                                <td></td>
                                <td></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10">5</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                                <tr>
                                <td></td>
                                <td></td>
                                    <td className="border border-2 border-gray-400 px-10 py-5 border-dashed border-b-gray-700" style={{ borderBottom: "4px solid  rgb(55 65 81)" }} >1</td>
                                    <td className="border border-2 border-gray-400 px-10 py-5 border-dashed border-b-gray-700" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>1</td>
                                    <td className="border border-2 border-gray-400 px-10 py-5  border-dashed border-b-gray-700" style={{ borderBottom: "4px solid  rgb(55 65 81)" }}>2</td>
                                </tr>
                                <tr > 
                                    <td></td>
                                    <td></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 bg-red-200 border-dashed px-10 py-5"></td>
                                </tr>
                                <tr className="text-amber-400border border-solid border-b-4 border-gray-700">
                                    
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">5</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 bg-red-200 border-dashed px-10 py-5"></td>
                                    <td className="border border-2 bg-red-200 border-dashed px-10 py-5"></td>
                                </tr>
                                <tr className="text-amber-400 border border-solid border-t-4 border-gray-700">
                                    
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">2</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">8</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5">0</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="grid grid-rows-[35%,65%]">
                            <h1 className="p-5">x</h1>
                            <h1 className="px-5">+</h1>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    )
}