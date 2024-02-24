import { useState } from "react";
import { IoSettingsOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { TbMusic, TbMusicOff } from "react-icons/tb";


export default function SoundMenu(onClickSound, onCLickEffects) {
    const [isOpen, setIsOpen] = useState(false);

    const openSetting = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="relative inline-flex justify-center text-left ">
            <div className={`${isOpen ? 'bg-slate-800' : 'bg-white'} transition-all duration-200 rounded-full border border-2 border-slate-800 bg-white p-3`}>
                <IoSettingsOutline
                    onClick={openSetting}
                    size={40}
                    color={`${isOpen ? '#e6edf5' : '#000000'}`}
                    className={`${isOpen ? 'rotate-180 ' : 'rotate-0'} transition-all duration-200`}
                />
            </div>
            {isOpen &&
            <div className="absolute -z-10 bg-slate-600 rounded-md shadow-lg p-3 mt-5 pt-10">
                    <div className="py-2" onClick={onClickSound}>
                        <span>
                            <IoVolumeHighOutline size={40} color="#cbd5e1"/>
                        </span>
                    </div>
                    <div className="py-2" onClick={onCLickEffects}>
                        <span>
                            <TbMusic size={35} color="#cbd5e1"/>
                        </span>
                    </div>
                </div>}
        </div>
    )
}