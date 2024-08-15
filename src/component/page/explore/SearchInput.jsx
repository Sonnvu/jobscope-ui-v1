import {BiMap, BiSearch, BiBuildings, BiTimeFive, BiBriefcase} from "react-icons/bi";
export default function SearchInput() {
    return (
        <div className="bg-slate-50 relative">
            <div className="mx-80 py-14 space-y-5">
                <div className="relative flex justify-between space-x-6">
                    <div className="relative w-4/6">
                        <div className="absolute inset-y-0 start-3 flex items-center ps-3.5 pointer-events-none">
                            <BiSearch className="size-5 text-gray-500"/>
                        </div>
                        <input type="text" id="input-group-1"
                               className="bg-white pl-16 border border-gray-200 p-10 text-md text-gray-500 rounded-3xl block w-full focus:outline-0"
                               placeholder="E.g FPGA Design Engineer"/>
                    </div>
                    <div className="relative w-2/6">
                        <div className="absolute inset-y-0 start-3 flex items-center ps-3.5 pointer-events-none">
                            <BiMap className="size-5 text-gray-500"/>
                        </div>
                        <input type="text" id="input-group-1"
                               className="bg-white pl-16 border border-gray-200 p-10 text-md text-gray-500 rounded-3xl block w-full focus:outline-0"
                               placeholder="Pittsburgh, PA"/>
                    </div>

                </div>
                <div className="relative flex bg-white p-7 rounded-2xl space-x-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3.5 pointer-events-none">
                            <BiBuildings className="size-5 text-gray-500"/>
                        </div>
                        <input type="text" id="input-group-1"
                               className="bg-white pl-12 border border-gray-200 p-4 text-sm text-gray-500 rounded-2xl block focus:outline-0"
                               placeholder="Company"/>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3.5 pointer-events-none">
                            <BiTimeFive className="size-5 text-gray-500"/>
                        </div>
                        <input type="text" id="input-group-1"
                               className="bg-white pl-12 border border-gray-200 p-4 text-sm text-gray-500 rounded-2xl block focus:outline-0"
                               placeholder="Last 24 hours"/>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3.5 pointer-events-none">
                            <BiBriefcase className="size-5 text-gray-500"/>
                        </div>
                        <input type="text" id="input-group-1"
                               className="bg-white pl-12 border border-gray-200 p-4 text-sm text-gray-500 rounded-2xl block focus:outline-0"
                               placeholder="Entry Level"/>
                    </div>
                </div>
            </div>

        </div>
    )
}