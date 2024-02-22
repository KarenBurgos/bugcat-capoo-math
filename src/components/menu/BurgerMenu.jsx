
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import IconMovilMenu from "../iconMovilMenu";
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

  const [movilMenu, setMovilMenu] = useState(false);

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

        <div className={` absolute top-0 left-0 w-screen h-screen  ${movilMenu ? 'z-20 fondo-menu' : '-z-20'} transition-all duration-500`}>
        </div>
          <div className={` md:hidden absolute z-30 top-0 left-0 w-screen h-screen flex items-center ${movilMenu ? 'translate-x-0 ' : 'translate-x-[-100%]'} transition-all duration-300`}>
            <nav className="md:hidden h-screen absolute z-20 bg-white md:bg-none rounded top-0 ">
              <div className="md:hidden h-full">
                <div className="flex relative justify-center w-full py-5">
                  <IconMovilMenu />
                  <IoClose
                    onClick={closeMenu}
                    size={35}
                    className="absolute right-2"
                  />
                </div>
                <div className="h-full grid grid-rows-[70%,30%] items-center justify-center">
                  <div className="flex flex-col h-full items-start px-16 pt-10 text-xl">
                    <Link to="/aprender/Suma/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Suma") && "bg-yellow-light"}`}>
                      Suma
                    </Link>
                    <Link to="/aprender/Resta/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Resta") && "bg-pink-light"}`}>
                      Resta
                    </Link>
                    <Link to="/aprender/Multiplicacion/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Multiplicacion") && "bg-purple-light"}`}>
                      Multiplicación
                    </Link>
                    <Link to="/aprender/Division/Explicacion" className={`py-5 w-full px-10 ${path.startsWith("/aprender/Division") && "bg-blue-light"}`}>
                      División
                    </Link>
                  </div>
                  <div
                    onClick={() => { navigation("/") }}
                    className=" hover:cursor-pointer flex flex-col items-center justify-center w-full"
                  >
                    <p>Regresar</p>
                    <FaArrowLeftLong className="w-20 h-20 pl-4" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        
    </div>
  )
}