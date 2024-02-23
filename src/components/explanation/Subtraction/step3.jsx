import subtractionImg from "../../../Assets/img/subtraction.png";
import Container from "../container";

//resta
export default function Step3() {
  return (
    <Container img={subtractionImg} step="3" color="#FD88BE">
      <p className="py-4">Luego restamos la siguiente columna</p>
      <div className="flex justify-center md:justify-between text-3xl items-center relative">
        <div>
          <div className="flex">
            <table className="border border-gray-300 border-dashed">
              <tbody>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-rose-400">
                    2
                  </td>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                    5
                  </td>
                </tr>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-rose-400">
                    1
                  </td>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                    4
                  </td>
                </tr>
                <tr className="border border-t-4 border-gray-700">
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-rose-400">
                    1
                  </td>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5">
                    1
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="absolute right-2 top-5 md:grid md:static">
              <h1 className="md:p-5">-</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
