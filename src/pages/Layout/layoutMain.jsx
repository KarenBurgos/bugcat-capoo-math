import { Outlet, useLocation } from "react-router-dom";
import SubTitle from "../../components/header/SubTitle";
import BackButton from "../../components/buttons/BackButton";

function LayoutMain() {
  const location = useLocation();
  return (
    <div
      id="title"
      className=" grid grid-rows-[20vh,80vh] md:grid-rows-[25vh,75vh] items-center"
    >
      <div className="grid items-center">
        {location.pathname == "/practica" && <BackButton />}
        <h1 className="text-center mt-3 md:grid md:p-0">
          <span className="grid md:flex justify-center">
            <span className="md:pr-4 font-bold text-6xl md:text-[7rem]">
              <span className="text-yellow">B</span>
              <span className="text-pink">u</span>
              <span className="text-blue">g</span>
              <span className="text-yellow">c</span>
              <span className="text-purple">a</span>
              <span className="text-pink">t</span>
            </span>
            <span className="font-bold text-6xl md:text-[7rem] md:pl-4">
              <span className="text-yellow">C</span>
              <span className="text-purple">a</span>
              <span className="text-blue">p</span>
              <span className="text-pink">o</span>
              <span className="text-pink">o</span>
            </span>
          </span>

          <SubTitle text={"¡Aprendamos matemáticas!"} />
        </h1>
      </div>
      <div className="h-[80vh] w-full flex flex-col items-center md:h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutMain;
