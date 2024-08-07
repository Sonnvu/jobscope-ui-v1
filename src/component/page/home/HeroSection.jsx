import MainDescription from "./MainDescription";
import {ChartAnimation} from "../../util/animation/ChartAnimation";

export default function HeroSection() {
    return (
        <div className="relative flex py-10 px-40 h-[550px] bg-slate-50">
            <div className="flex items-center h-full w-1/2">
                <MainDescription />
            </div>
            <div className="flex justify-center items-center h-full w-1/2 pr-32">
                <ChartAnimation />
            </div>
        </div>
    )
}