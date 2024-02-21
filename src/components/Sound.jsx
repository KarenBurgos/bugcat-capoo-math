import { createContext, useContext, useRef, useEffect, useState } from "react";
import SoundIcon from "../Assets/Icons/Sound/Sound";
import MuteIcon from "../Assets/Icons/Sound/Mute";
import music from "../Assets/Audio/music.mp3";
import MusicIcon from "../Assets/Icons/Sound/MusicIcon";
import MusicMuteIcon from "../Assets/Icons/Sound/MusicIconMute";

const SoundContext = createContext();

export function useSound() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isEffectSoundEnabled, setIsEffectSoundEnabled] = useState(false);

  const audioRef = useRef(null);
  const musicAudioRef = useRef(new Audio(music));

  useEffect(() => {
    const audioElement = musicAudioRef.current;

    if (isSoundEnabled) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    localStorage.setItem("isSoundEnabled", JSON.stringify(isSoundEnabled));
  }, [isSoundEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "isEffectSoundEnabled",
      JSON.stringify(isEffectSoundEnabled),
    );
  }, [isEffectSoundEnabled]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Restablecer la configuración al salir de la página
      localStorage.setItem("isSoundEnabled", JSON.stringify(false));
      localStorage.setItem("isEffectSoundEnabled", JSON.stringify(false));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const toggleEffectSound = () => {
    setIsEffectSoundEnabled(!isEffectSoundEnabled);
  };

  return (
    <SoundContext.Provider
      value={{
        isSoundEnabled,
        isEffectSoundEnabled,
        toggleSound,
        toggleEffectSound,
      }}
    >
      <div className="absolute flex flex-col w-24 md:w-36 justify-around items-center md:m-16 h-14 z-10 top-0 right-0 cursor-pointer">
        <div className="interaction-element w-full flex justify-end">
          <p className="pb-5 invisible md:visible">
            Haz clic aquí para activar el sonido
          </p>
        </div>
        <div className="md:flex">
          <div className="pb-2 md:p-0 w-10 md:w-1/2 md:pr-2">
            {isSoundEnabled ? (
              <SoundIcon onClick={toggleSound} />
            ) : (
              <MuteIcon onClick={toggleSound} />
            )}
          </div>
          <div className="pt-2 md:p-0 w-10 md:w-1/2 md:pl-2">
            {isEffectSoundEnabled ? (
              <MusicIcon onClick={toggleEffectSound} />
            ) : (
              <MusicMuteIcon onClick={toggleEffectSound} />
            )}
          </div>
        </div>
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>
      </div>
      {children}
    </SoundContext.Provider>
  );
}
