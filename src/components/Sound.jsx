import { createContext, useContext, useRef, useEffect, useState } from "react";
import music from "../Assets/Audio/music.mp3";
import { IoSettingsOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { TbMusic, TbMusicOff } from "react-icons/tb";

const SoundContext = createContext();

export function useSound() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isEffectSoundEnabled, setIsEffectSoundEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="absolute flex flex-col w-24 md:w-36 justify-around items-center md:my-14 md:mx-8 h-14 z-10 top-0 right-0 cursor-pointer">
      <div className="relative inline-flex justify-center mt-10 md:m-0">
        <div className={`${isOpen ? 'bg-slate-800' : 'bg-white'} transition-all duration-200 rounded-full border border-2 border-slate-800 bg-white p-3`}>
          <IoSettingsOutline
            onClick={() => { setIsOpen(!isOpen) }}
            color={`${isOpen ? '#e6edf5' : '#000000'}`}
            className={`${isOpen ? 'rotate-180 ' : 'rotate-0'} transition-all duration-200 md:size-10 size-7 `}
          />
        </div>
        {isOpen &&
          <div className="absolute -z-10 bg-slate-600 rounded-md shadow-lg p-3 mt-5 pt-10">
            <div className="py-2" >
              <span>
              {isSoundEnabled ? (
                <IoVolumeHighOutline className="md:size-10 size-7" color="#cbd5e1" onClick={toggleSound} />
              ):(
                <IoVolumeMuteOutline className="md:size-10 size-7" color="#cbd5e1" onClick={toggleSound} />
              )}
              </span>
            </div>
            <div className="py-2" >
              <span>
              {isEffectSoundEnabled ? (
                <TbMusic className="md:size-10 size-7" color="#cbd5e1" onClick={toggleEffectSound}/>
              ) : (
                <TbMusicOff className="md:size-10 size-7" color="#cbd5e1" onClick={toggleEffectSound}/>
              )}
              </span>
            </div>
          </div>}
          </div>
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>
      </div>
      {children}
    </SoundContext.Provider>
  );
}
