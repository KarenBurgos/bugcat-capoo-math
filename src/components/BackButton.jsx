import { Navigate, useNavigate } from "react-router-dom"

export default function BackButton(){
    const navigation = useNavigate()

    function goBack(){
        navigation(-1)
    }

    return(
        <div onClick={goBack} className="absolute z-10 md:pt-2 px-8  hover:cursor-pointer">
            <p className="text-base md:text-xl">Regresar</p>
            <svg className="w-14 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="4 5 24 24">
                <path d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z" fill="#000000" data-name="Left"/>
            </svg>
        </div>
    )
}