import BackButton from "./BackButton";

export default function Title({ text, color, backButton }) {
    console.log(color)
    return (
        <div className="flex border border-cyan-500">
            {backButton && <BackButton />}
            <div className="flex flex-col w-full justify-center">
                <h1 className={`font-bold text-4xl md:text-9xl text-center text-${color}`}>{text}</h1>
            </div>
        </div>

    )
}