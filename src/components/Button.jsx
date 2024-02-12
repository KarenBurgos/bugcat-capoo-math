import React, { useEffect, useRef, useState } from "react";
import HoverAdd from "./HoverBackground/HoverAdd";
import HoverSub from "./HoverBackground/HoverSub";
import HoverMult from "./HoverBackground/HoverMult";
import HoverDiv from "./HoverBackground/HoverDiv";
import { ArrowAdd, ArrowSub, ArrowMult, ArrowDiv } from "./HoverArrow/Arrows";
import hoverSound from "../Assets/Audio/hoverSound.mp3";
import clickSound from "../Assets/Audio/Click.mp3";

function Button({ label, onClick, isSoundEnabled, operation, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverAudioRef = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(clickSound));

  const isEffectSoundEnabled = JSON.parse(localStorage.getItem('isEffectSoundEnabled')) || false;

  const onHover = () => {
    setIsHovered(true);
    if (isEffectSoundEnabled) {
        hoverAudioRef.current.play();
      }
  };

  const onLeave = () => {
    setIsHovered(false);
    hoverAudioRef.current.pause();
    hoverAudioRef.current.currentTime = 0;
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

    const getVisibility = (hoveredLabel) => isHovered ? (label === hoveredLabel ? "block" : "hidden") : "hidden";


  return (
    <>
      <div className="flex justify-center items-center" onMouseOver={onHover}
          onMouseLeave={onLeave}>
        <ArrowAdd visibility={getVisibility("Suma")} />
        <ArrowSub visibility={getVisibility("Resta")} />
        <ArrowMult visibility={getVisibility("Multiplicación")} />
        <ArrowDiv visibility={getVisibility("División")} />
        <button
          className="relative overflow-hidden w-9/12 md:w-1/2 h-14 md:h-20 px-10 py-2 border border-2 border-customBlack rounded-md group"
          onClick={handleClick}
          
        >
          <span className="relative z-10">{label}</span>
          <span className={`absolute -inset-0 bg-${color} w-0 transition-all duration-300 group-hover:w-full`}></span>
        </button>
      </div>
    </>
  );
}

export default Button;