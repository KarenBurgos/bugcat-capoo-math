import additionImg from "../../../Assets/img/Suma.png";
import Arrow from "../../../Assets/rightArrow.svg";
import curvLeftArro from "../../../Assets/curvLeftArrow.svg";
import Container from "../container";

//suma
export default function Step2() {
  return (
    <Container img={additionImg} step="2" color="#FEEB70">
      <p className="py-4">
        Los números se suman de derecha a izquierda, asi que empezamos sumando
        los números que estan primero a la derecha
      </p>
      <p>
        {" "}
        Si la suma es mayor que 9 y tienes mas columnas de números, coloca el
        último número debajo de la línea y el 1 en la siguiente columna.
      </p>
      <div className="flex flex-col md:flex-row justify-between text-3xl items-center pt-5">
        <div>
          <p className="pl-11  text-pink">1</p>
          <div className="flex">
            <table className="border border-gray-300 border-dashed">
              <tbody>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                    2
                  </td>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    5
                  </td>
                </tr>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    5
                  </td>
                </tr>
                <tr className="border border-t-4 border-gray-700">
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    0
                  </td>
                </tr>
              </tbody>
            </table>
            <h1 className="pl-2 md:p-5">+</h1>
          </div>
        </div>
        <embed
          className="rotate-90 md:rotate-180 flex justify-center items-center p-10 md:p-0"
          src={Arrow}
        />
        <div className="flex">
          <p className="flex items-end px-8 py-5 text-pink">1</p>
          <div className="flex ">
            <table className="border border-gray-300 border-dashed">
              <tbody>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    5
                  </td>
                </tr>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    5
                  </td>
                </tr>
                <tr className="border border-t-4 border-gray-700">
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    0
                  </td>
                </tr>
              </tbody>
            </table>
            <h1 className="p-5">+</h1>
          </div>
        </div>
        <embed
          className="hidden md:inline-flex pb-20 pr-20"
          src={curvLeftArro}
        />
      </div>
    </Container>
  );
}
