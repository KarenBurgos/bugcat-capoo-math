import Container from "../container";
import multiplicationImg from "../../../Assets/img/mul.png";

export default function step1() {
  return (
    <div>
      <p className="text-center text-xl md:text-4xl">
        Realicemos la operación 25 x 15
      </p>
      <Container img={multiplicationImg} step="1" color="#9B5ED8">
        <p className="py-4">Ordena los números uno debajo del otro</p>
        <div className="flex text-2xl">
          <table className="table-auto border-collapse border border-gray-300 border-dashed">
            <tbody>
              <tr>
                <td className="border border-2 border-gray-400 border-dashed px-10">
                  2
                </td>
                <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                  5
                </td>
              </tr>
              <tr>
                <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                  1
                </td>
                <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                  5
                </td>
              </tr>
              <tr className="border border-t-4 border-gray-700">
                <td className="border border-2 border-gray-400 border-dashed px-10 py-8"></td>
                <td className="border border-2 border-gray-400 border-dashed px-10 py-5"></td>
              </tr>
            </tbody>
          </table>
          <h1 className="p-5">x</h1>
        </div>
      </Container>
    </div>
  );
}
