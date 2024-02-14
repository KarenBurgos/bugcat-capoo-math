import BackButton from "./BackButton";

export default function Title({ text, color, backButton, children }) {
    return (
        <div className="flex flex-col h-full justify-center">
            {backButton && <BackButton />}
            <div className="flex flex-col w-full justify-center">
                <h1 className={`font-bold  text-5xl md:text-[7rem] text-center text-${color} ${text == "Multiplicación" &&'text-[2rem] md:text-9xl'} `}>{text}</h1>
                {children}
            </div>
        </div>

    )
}