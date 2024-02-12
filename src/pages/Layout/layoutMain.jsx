import { Outlet, useLoaderData } from "react-router-dom"
import SubTitle from "../../components/SubTitle"
import { SoundProvider } from "../../components/Sound"

function LayoutMain() {
    return (
        <SoundProvider>
            <div id="title" className="pt-5 h-4/5">
                <h1 className="font-bold text-4xl md:text-9xl text-center">
                    <span className="pr-4">
                        <span className="text-yellow">B</span>
                        <span className="text-pink">u</span>
                        <span className="text-blue">g</span>
                        <span className="text-yellow">c</span>
                        <span className="text-purple">a</span>
                        <span className="text-pink">t</span>
                    </span>
                    <span className="pl-4">
                        <span className="text-yellow">C</span>
                        <span className="text-purple">a</span>
                        <span className="text-blue">p</span>
                        <span className="text-pink">o</span>
                        <span className="text-pink">o</span>
                    </span>
                </h1>
                <SubTitle text={"¡Aprendamos matemáticas!"} />
                <Outlet />
            </div>
        </SoundProvider>
    )
}

export default LayoutMain