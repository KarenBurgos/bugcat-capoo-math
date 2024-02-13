
import MusicNoteMuteIcon from "./Music mute Icon.png"

export default function MusicIconMute({onClick}){
    return(
        <img src={MusicNoteMuteIcon} onClick={onClick} className='w-full h-full' />
    )
}