
import MusicNoteIcon from "./Music Icon.png"

export default function MusicIcon({onClick}){
    return(
        <img src={MusicNoteIcon} onClick={onClick} className='w-full h-full'/>
    )
}