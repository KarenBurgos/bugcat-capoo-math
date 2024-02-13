import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import SubTitle from "../../components/SubTitle";
import { SoundProvider } from "../../components/Sound";
import BackButton from "../../components/BackButton";

function LayoutMain() {
  const location = useLocation();
  return (
    <div
      id="title"
      className="pt-5 h-[100vh] grid-rows-[20%, 80%] md:grid-rows-[30%, 70%]"
    >
      <div>
        {location.pathname == "/practica" && <BackButton />}
        <h1 className="font-bold text-4xl md:text-9xl text-center">
          <span className="pr-4">
            <span className="text-yellow">B</span>
            <span className="text-pink">u</span>
            <span className="text-blue">g</span>
            <span className="text-yellow">c</span>
            <span className="text-purple">a</span>
            <span className="text-pink">t</span>
          </span>
          <span className="pl-4">
            <span className="text-yellow">C</span>
            <span className="text-purple">a</span>
            <span className="text-blue">p</span>
            <span className="text-pink">o</span>
            <span className="text-pink">o</span>
          </span>
          <SubTitle text={"¡Aprendamos matemáticas!"} />
        </h1>
      </div>
      <div className="h-[80vh] w-full flex flex-col items-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutMain;
