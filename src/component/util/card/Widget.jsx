import {twMerge} from "tailwind-merge";

export default function Widget({children, Title, Description, style}) {
    return (
        <div className="relative bg-slate-50 flex flex-col w-1/3 rounded-3xl p-5 space-y-5">
            <div className={twMerge("relative flex bg-white rounded-2xl h-52 mx-auto space", style)}>
                {children}
            </div>
            <div>
                <h1 className="text-2xl font-poppins font-medium text-gray-700">{Title}</h1>
                <p className="text-xl font-poppins text-gray-600">{Description}</p>
            </div>
        </div>
    )
}