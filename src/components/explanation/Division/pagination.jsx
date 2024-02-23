import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Pagination({ page, currentPage, setCurrentPage }) {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickNext = () => {
    if (currentPage === "Explicacion") {
      setCurrentPage(1);
      navigate(`/aprender/Division/1`);
    }
    if (currentPage < 8) {
      setCurrentPage(parseInt(currentPage) + 1);
      navigate(`/aprender/Division/${parseInt(currentPage) + 1}`);
    }
  };

  const onClickPrevious = () => {
    if (currentPage === 1) {
      setCurrentPage("Explicacion");
      navigate(`/aprender/Division/Explicacion`);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/aprender/Division/${currentPage - 1}`);
    }
  };

  return (
    <div>
      <div className="hidden md:inline-flex flex justify-center items-end ">
        <Link
          to="/aprender/Division/Explicacion"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/Explicacion" ? "bg-blue" : "bg-gray-300"}`}
        >
          Explicación
        </Link>
        <Link
          to="/aprender/Division/1"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/1" ? "bg-blue" : "bg-gray-300"}`}
        >
          1
        </Link>
        <Link
          to="/aprender/Division/2"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/2" ? "bg-blue" : "bg-gray-300"}`}
        >
          2
        </Link>
        <Link
          to="/aprender/Division/3"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/3" ? "bg-blue" : "bg-gray-300"}`}
        >
          3
        </Link>
        <Link
          to="/aprender/Division/4"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/4" ? "bg-blue" : "bg-gray-300"}`}
        >
          4
        </Link>
        <Link
          to="/aprender/Division/5"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/5" ? "bg-blue" : "bg-gray-300"}`}
        >
          5
        </Link>
        <Link
          to="/aprender/Division/6"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/6" ? "bg-blue" : "bg-gray-300"}`}
        >
          6
        </Link>
        <Link
          to="/aprender/Division/7"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/7" ? "bg-blue" : "bg-gray-300"}`}
        >
          7
        </Link>
        <Link
          to="/aprender/Division/8"
          className={`mx-5 px-5 py-2 ${location.pathname == "/aprender/Division/8" ? "bg-blue" : "bg-gray-300"}`}
        >
          8
        </Link>
        <Link
          to="/dificultad/Division"
          className={`mx-5 px-5 py-2 bg-gray-300`}
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
