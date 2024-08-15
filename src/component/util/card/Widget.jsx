import {twMerge} from "tailwind-merge";

export default function Widget({children, Title, Description, style}) {
    return (
        <div className="relative bg-slate-50 flex flex-col w-1/3 rounded-3xl p-6 space-y-5">
            <div className={twMerge("relative flex bg-white rounded-2xl h-52 mx-auto space", style)}>
                {children}
            </div>
            <div className="py-3 space-y-2">
                <h1 className="text-2xl font-poppins font-medium text-gray-700">{Title}</h1>
                <p className="text-md font-poppins text-gray-500">{Description}</p>
            </div>
        </div>
    )
}