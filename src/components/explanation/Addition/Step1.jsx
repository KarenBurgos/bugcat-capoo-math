import additionImg from "../../../Assets/img/Suma.png";
import Container from "../container";

//suma
export default function Step1() {
  return (
    <Container img={additionImg} step="1" color="#FEEB70">
      <p className="py-4 text-xl">Ordena los números uno debajo del otro</p>
      <div className="flex text-2xl justify-center md:justify-start w-full">
        <table className="table-auto border-collapse border border-gray-300 border-dashed">
          <tbody>
            <tr>
              <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5">
                2
              </td>
              <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5 ">
                5
              </td>
            </tr>
            <tr>
              <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5 "></td>
              <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5 ">
                5
              </td>
            </tr>
            <tr className="border border-t-4 border-gray-700">
              <td className="border border-2 border-gray-400 border-dashed px-7 py-8 md:px-10 md:py-5"></td>
              <td className="border border-2 border-gray-400 border-dashed px-7 py-8 md:px-10 md:py-5 "></td>
            </tr>
          </tbody>
        </table>
        <h1 className="p-5">+</h1>
      </div>
    </Container>
  );
}
