
import { useState } from "react"
import lighthub from "../../../Assets/lighthub.svg"
import divisionComponentsImg from "../../../Assets/img/divisiocomponents.png"

export default function ShowDivisionParts( ) {
    const [show, setShow] = useState(false)

    return (
        <div className="relative flex w-full" >
            <button onClick={() => { setShow(!show) }}>
                <img src={lighthub} />
            </button>
            {
                show &&
                <section className={`absolute z-10 bg-white px-10 py-4 left-20 rounded flex justify-between border border-2 border-gray-100`}>
                    <img src={divisionComponentsImg} alt="resultado" className="w-10/12"/>
                    <p className="text-3xl cursor-pointer" onClick={() => { setShow(false) }}>x</p>
                </section>
            }
        </div>
    )

}