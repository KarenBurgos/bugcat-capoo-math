import Container from "../container";
import multiplicationImg from "../../../Assets/img/mul.png";
import Arrow from "../../../Assets/rightArrow.svg";
import diagonalArrow from "../../../Assets/diagonalLeftArrow.svg";

export default function step3() {
  return (
    <Container img={multiplicationImg} step="3" color="#9B5ED8">
      <p className="py-4">
        Ahora multiplicamos con el{" "}
        <span className="underline text-pink">
          segundo numero a la derecha de la primera fila
        </span>
        . En este caso 5 x 2 = 10 pero le sumamos el 2 que colocamos arriba de
        la multiplicacion anterior.
      </p>
      <div className="grid md:flex text-3xl items-center justify-center md:justify-between">
        <div className="flex flex-col">
          <p className="pl-11">2</p>
          <div className="flex">
            <div className="flex relative">
              <table className="table-auto border-collapse border border-gray-300 border-dashed">
                <tbody>
                  <tr>
                    <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 text-pink">
                      2
                    </td>
                    <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                      5
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                      1
                    </td>
                    <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5 text-purple">
                      5
                    </td>
                  </tr>
                  <tr className="border border-t-4 border-gray-700">
                    <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-8"></td>
                    <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                      5
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <embed
                  src={diagonalArrow}
                  className="h-14 absolute top-14 left-20"
                />
              </div>
            </div>
            <div className="flex items-start">
              <h1 className="text-start p-5">x</h1>
            </div>
          </div>
        </div>
        <div className="w-full py-10 flex justify-center">
          <embed src={Arrow} className="rotate-90 md:rotate-0" />
        </div>

        <p>5 x 2 = 10 + 2 = 12</p>
      </div>
      <p className="py-10">
        {" "}
        Como ya no hay mas números que multiplicar de la primera fila colocamos
        el resultado sin simportar que sea mayor a 10 porque no hay mas lugares
        donde llevar
      </p>
      <div className="flex flex-col text-3xl">
        <p className="pl-32">1</p>
        <div className="flex">
          <table className="table-auto border-collapse border border-gray-300 border-dashed">
            <tbody>
              <tr>
                <td></td>
                <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10">
                  2
                </td>
                <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                  5
                </td>
              </tr>
              <tr>
                <td></td>
                <td
                  className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5"
                  style={{ borderBottom: "4px solid  rgb(55 65 81)" }}
                >
                  1
                </td>
                <td
                  className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5"
                  style={{ borderBottom: "4px solid  rgb(55 65 81)" }}
                >
                  5
                </td>
              </tr>
              <tr className="text-amber-400">
                <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                  1
                </td>
                <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                  2
                </td>
                <td className="border border-2 border-gray-400 border-dashed px-8 md:px-10 py-5">
                  5
                </td>
              </tr>
            </tbody>
          </table>
          <h1 className="p-5">x</h1>
        </div>
      </div>
    </Container>
  );
}
