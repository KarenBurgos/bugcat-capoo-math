import { useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import IconMovilMenu from "./iconMovilMenu";
import clickSound from "../../Assets/Audio/Click.mp3";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function BurgerMenu() {
  const params = useLoaderData();
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const clickAudioRef = useRef(new Audio(clickSound));

  const [movilMenu, setMovilMenu] = useState(false);
  const isEffectSoundEnabled =
    JSON.parse(localStorage.getItem("isEffectSoundEnabled")) || false;

  const handleClick = () => {
    if (isEffectSoundEnabled) {
      clickAudioRef.current.play();
    }
  };
  const closeMenu = () => {
    setMovilMenu(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center md:hidden relative">
        <div className="md:hidden absolute z-10 top-2 left-5" onClick={() => { setMovilMenu(true); }}>
          <IoMenu size={35} />
        </div>
      </div>

      <div className={` absolute top-0 left-0 w-screen h-full  ${movilMenu ? 'inline fondo-menu' : 'hidden'} transition-all duration-500`}>
      </div>
      <div className={`md:hidden absolute z-30 top-0 left-0 w-screen h-screen ${movilMenu ? 'translate-x-0 ' : 'translate-x-[-100%]'} transition-all duration-300`}>
        <nav className="md:hidden h-screen absolute z-20 bg-white md:bg-none rounded top-0 ">
          <div className="md:hidden h-full grid grid-rows-[20%,80%] ">
            <div className="grid relative justify-center items-center w-full">
              <div className="flex py-5">
                <IconMovilMenu />
                <IoClose
                  onClick={closeMenu}
                  size={35}
                  className="absolute right-2 flex self-start"
                />
              </div>
              <span className="self-center mx-10 w-9/12 border-b-2 absolute bottom-0"></span>
            </div>
            
            <div className="grid grid-rows-[75%,10%,15%] items-center">
              <div className="flex flex-col px-16 text-xl relative">
                <Link to="/aprender/Suma/Explicacion" className="overflow-hidden py-5 w-full px-10 relative" onClick={handleClick}>
                <span
                   className={`${
                    path.startsWith("/aprender/Suma") ? "bg-yellow-light translate-x-0" : "translate-x-[-100%]"
                  } absolute -inset-0 transition-all duration-300 -z-10`}
                ></span>
                  Suma
                </Link>
                <Link to="/aprender/Resta/Explicacion" className="overflow-hidden py-5 w-full px-10 relative">
                <span
                   className={`${
                    path.startsWith("/aprender/Resta") ? "bg-pink-light translate-x-0" : "translate-x-[-100%]"
                  } absolute -inset-0 transition-all duration-300 -z-10`}
                ></span>
                  Resta
                </Link>
                <Link to="/aprender/Multiplicacion/Explicacion" className="overflow-hidden py-5 w-full px-10 relative" onClick={handleClick}>
                <span
                   className={`${
                    path.startsWith("/aprender/Multiplicacion") ? "bg-purple-light translate-x-0" : "translate-x-[-100%]"
                  } absolute -inset-0 transition-all duration-300 -z-10`}
                ></span>
                  Multiplicación
                </Link>
                <Link to="/aprender/Division/Explicacion" className="overflow-hidden py-5 w-full px-10 relative" onClick={handleClick}>
                <span
                   className={`${
                    path.startsWith("/aprender/Division") ? "bg-blue-medium translate-x-0" : "translate-x-[-100%]"
                  } absolute -inset-0 transition-all duration-300 -z-10`}
                ></span>
                  División
                </Link>
              </div>
              <span className="mx-10 w-9/12 border-b-2 "></span>
              <div
                onClick={() => { navigation("/") }}
                className=" hover:cursor-pointer flex gap-3 items-center justify-center w-full "
              >
                <div className="flex justify-center items-center ">
                  
                  <FaArrowLeftLong size={25} />
                </div>
                <p className="text-xl">Inicio</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}