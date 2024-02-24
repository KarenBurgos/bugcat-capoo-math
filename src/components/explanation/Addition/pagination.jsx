import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Pagination({ currentPage, setCurrentPage }) {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickNext = () => {
    if (currentPage === "Explicacion") {
      setCurrentPage(1);
      navigate(`/aprender/Suma/1`);
    }
    if (currentPage < 4) {
      setCurrentPage(parseInt(currentPage) + 1);
      navigate(`/aprender/Suma/${parseInt(currentPage) + 1}`);
    }
  };

  const onClickPrevious = () => {
    if (currentPage === 1) {
      setCurrentPage("Explicacion");
      navigate(`/aprender/Suma/Explicacion`);
    }
    if (currentPage > 1) {
      setCurrentPage(parseInt(currentPage) - 1);
      navigate(`/aprender/Suma/${parseInt(currentPage) - 1}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="hidden md:inline-flex justify-center items-end">
        <Link
          to="/aprender/Suma/Explicacion"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Suma/Explicacion" ? "bg-yellow" : "bg-gray-300"}`}
        >
          Explicación
        </Link>
        <Link
          to="/aprender/Suma/1"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Suma/1" ? "bg-yellow" : "bg-gray-300"}`}
        >
          1
        </Link>
        <Link
          to="/aprender/Suma/2"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Suma/2" ? "bg-yellow" : "bg-gray-300"}`}
        >
          2
        </Link>
        <Link
          to="/aprender/Suma/3"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Suma/3" ? "bg-yellow" : "bg-gray-300"}`}
        >
          3
        </Link>
        <Link
          to="/aprender/Suma/4"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Suma/4" ? "bg-yellow" : "bg-gray-300"}`}
        >
          4
        </Link>
        <Link
          to="/dificultad/Suma"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Suma/5" ? "bg-yellow" : "bg-gray-300"}`}
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
        <p className="w-full text-center">{currentPage}</p>
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
