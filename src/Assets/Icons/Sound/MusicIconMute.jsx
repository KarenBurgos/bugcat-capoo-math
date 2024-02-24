import MusicNoteMuteIcon from "./Mute";

export default function MusicIconMute({ onClick }) {
  return (
    <img src={MusicNoteMuteIcon} onClick={onClick} className="w-full h-full" />
  );
}
