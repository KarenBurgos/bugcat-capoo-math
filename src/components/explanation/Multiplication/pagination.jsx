import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Pagination({ page, currentPage, setCurrentPage }) {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickNext = () => {
    if (currentPage === "Explicacion") {
      setCurrentPage(1);
      navigate(`/aprender/Multiplicacion/1`);
    }
    if (currentPage < 7) {
      setCurrentPage(parseInt(currentPage) + 1);
      navigate(`/aprender/Multiplicacion/${parseInt(currentPage) + 1}`);
    }
  };

  const onClickPrevious = () => {
    if (currentPage === 1) {
      setCurrentPage("Explicacion");
      navigate(`/aprender/Multiplicacion/Explicacion`);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/aprender/Multiplicacion/${currentPage - 1}`);
    }
  };

  return (
    <div>
      <div className="hidden md:inline-flex flex justify-center items-end ">
        <Link
          to="/aprender/Multiplicacion/Explicacion"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/Explicacion" ? "bg-purple" : "bg-gray-300"}`}
        >
          Explicación
        </Link>
        <Link
          to="/aprender/Multiplicacion/1"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/1" ? "bg-purple" : "bg-gray-300"}`}
        >
          1
        </Link>
        <Link
          to="/aprender/Multiplicacion/2"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/2" ? "bg-purple" : "bg-gray-300"}`}
        >
          2
        </Link>
        <Link
          to="/aprender/Multiplicacion/3"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/3" ? "bg-purple" : "bg-gray-300"}`}
        >
          3
        </Link>
        <Link
          to="/aprender/Multiplicacion/4"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/4" ? "bg-purple" : "bg-gray-300"}`}
        >
          4
        </Link>
        <Link
          to="/aprender/Multiplicacion/5"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/5" ? "bg-purple" : "bg-gray-300"}`}
        >
          5
        </Link>
        <Link
          to="/aprender/Multiplicacion/6"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/6" ? "bg-purple" : "bg-gray-300"}`}
        >
          6
        </Link>
        <Link
          to="/aprender/Multiplicacion/7"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Multiplicacion/7" ? "bg-purple" : "bg-gray-300"}`}
        >
          7
        </Link>
        <Link
          to="/dificultad/Multiplicacion"
          className="mx-5 px-5 py-2 bg-gray-300"
        >
          Ejercicios
        </Link>
      </div>
      <div className="md:hidden w-screen grid grid-cols-3 items-center justify-center">
        <div className="flex justify-end">
          <MdNavigateBefore
            size={40}
            onClick={onClickPrevious}
            className="bg-gray-300 "
          />
        </div>
        <p className="w-full text-center">{page}</p>
        <div className="flex justify-start">
          <MdNavigateNext
            size={40}
            onClick={onClickNext}
            className="bg-gray-300 "
          />
        </div>
      </div>
    </div>
  );
}
