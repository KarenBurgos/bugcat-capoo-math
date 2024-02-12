import { createContext, useContext, useRef, useEffect, useState } from 'react';
import SoundIcon from "../Assets/Icons/Sound/Sound"
import MuteIcon from "../Assets/Icons/Sound/Mute"
import music from "../Assets/Audio/music.mp3"
import hoverSound from "../Assets/Audio/hoverSound.mp3";

// Creamos un contexto para el control de sonido y efectos de sonido
const SoundContext = createContext();

export function useSound() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  const storedSoundState = localStorage.getItem('isSoundEnabled');
  const storedEffectSoundState = localStorage.getItem('isEffectSoundEnabled');

  const initialSoundState = storedSoundState ? JSON.parse(storedSoundState) : false;
  const initialEffectSoundState = storedEffectSoundState ? JSON.parse(storedEffectSoundState) : false;

  const [isSoundEnabled, setIsSoundEnabled] = useState(initialSoundState);
  const [isEffectSoundEnabled, setIsEffectSoundEnabled] = useState(initialEffectSoundState);

  const audioRef = useRef(null);
  const musicAudioRef = useRef(new Audio(music));  // Nueva referencia para la música de fondo

  useEffect(() => {
    const audioElement = musicAudioRef.current;

    if (isSoundEnabled) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    // Almacena el estado del sonido en localStorage
    localStorage.setItem('isSoundEnabled', JSON.stringify(isSoundEnabled));
  }, [isSoundEnabled]);

  useEffect(() => {
    // Almacena el estado de los efectos de sonido en localStorage
    localStorage.setItem('isEffectSoundEnabled', JSON.stringify(isEffectSoundEnabled));
  }, [isEffectSoundEnabled]);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const toggleEffectSound = () => {
    setIsEffectSoundEnabled(!isEffectSoundEnabled);
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, isEffectSoundEnabled, toggleSound, toggleEffectSound }}>
      <div className="absolute z-10 top-0 right-0 cursor-pointer">
        {isSoundEnabled ? (
          <SoundIcon onClick={toggleSound} />
        ) : (
          <MuteIcon onClick={toggleSound} />
        )}
        <button onClick={toggleEffectSound}>
          {isEffectSoundEnabled ? 'Desactivar Efectos' : 'Activar Efectos'}
        </button>
        {/* Esta referencia adicional puede ser útil para otros efectos de sonido */}
        <audio ref={audioRef} loop>
          <source src={musicAudioRef} type="audio/mp3" />
        </audio>
      </div>
      {children}
    </SoundContext.Provider>
  );
}