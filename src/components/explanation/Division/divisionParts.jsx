import { useState } from "react";
import lighthub from "../../../Assets/lighthub.svg";
import divisionComponentsImg from "../../../Assets/img/divisiocomponents.png";
import { IoClose } from "react-icons/io5";

export default function ShowDivisionParts() {
  const [show, setShow] = useState(false);

  return (
    <div className="md:relative grid md:flex w-full">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        <img src={lighthub} />
      </button>
      {show && (
        <section>
          <article
            className={`hidden md:inline-flex absolute z-10 bg-white px-10 py-4 left-20 rounded justify-between border border-2 border-gray-100`}
          >
            <img
              src={divisionComponentsImg}
              alt="resultado"
              className="w-10/12"
            />
            <p
              className="text-3xl cursor-pointer"
              onClick={() => {
                setShow(false);
              }}
            >
              x
            </p>
          </article>
          <article
            className={`md:hidden absolute z-10 top-0 left-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center`}
          >
            <div className="bg-white rounder rounded-lg">
              <IoClose
                className="text-3xl cursor-pointer absolute z-10 top-0 right-5"
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
            <div className="bg-white px-5 py-7 flex justify-center items-center">
              <img
                src={divisionComponentsImg}
                alt="resultado"
                className="w-10/12"
              />
            </div>
          </article>
        </section>
      )}
    </div>
  );
}
