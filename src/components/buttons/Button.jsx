import React, { useEffect, useRef, useState } from "react";
import { ArrowAdd, ArrowSub, ArrowMult, ArrowDiv } from "../hoverArrow/Arrows";
import hoverSound from "../../Assets/Audio/hoverSound.mp3";
import clickSound from "../../Assets/Audio/Click.mp3";

function Button({ label, onClick, isSoundEnabled, operation, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverAudioRef = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(clickSound));

  const isEffectSoundEnabled =
    JSON.parse(localStorage.getItem("isEffectSoundEnabled")) || false;

  const onHover = () => {
    setIsHovered(true);
  };

  const onEnter = () => {
    if (isEffectSoundEnabled) {
      hoverAudioRef.current.play();
    }
  };

  const onOut = () => {
    hoverAudioRef.current.pause();
    hoverAudioRef.current.currentTime = 0;
  };

  const onLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (isEffectSoundEnabled) {
      clickAudioRef.current.play();
    }
    onClick();
  };

  useEffect(() => {
    if (isHovered && isEffectSoundEnabled) {
      hoverAudioRef.current.play();
    } else {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.currentTime = 0;
    }
  }, [isHovered, isEffectSoundEnabled]);

  useEffect(() => {
    const handleAudioEnd = () => {
      hoverAudioRef.current.currentTime = 0;
    };

    hoverAudioRef.current.addEventListener("ended", handleAudioEnd);

    return () => {
      hoverAudioRef.current.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const getVisibility = (hoveredLabel) =>
    isHovered ? (label === hoveredLabel ? "block" : "hidden") : "hidden";

  return (
    <>
      <div
        className="flex justify-center items-center"
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        onMouseEnter={onEnter}
        onMouseOut={onOut}
      >
        <ArrowAdd visibility={getVisibility("Suma")} />
        <ArrowSub visibility={getVisibility("Resta")} />
        <ArrowMult visibility={getVisibility("Multiplicación")} />
        <ArrowDiv visibility={getVisibility("División")} />
        <button
          className="relative overflow-hidden w-full md:w-1/2 h-20 px-10 py-2 border border-2 border-customBlack rounded-md group"
          onClick={handleClick}
        >
          <span className="relative z-10 text-[1.2rem] md:text-xl">
            {label}
          </span>
          <span
            className={`absolute -inset-0 bg-${color} w-0 transition-all duration-300 group-hover:w-full`}
          ></span>
        </button>
      </div>
    </>
  );
}

export default Button;
