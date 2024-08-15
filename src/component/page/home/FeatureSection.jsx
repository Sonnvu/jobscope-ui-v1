import Widget from "../../util/card/Widget";
import DemoLineChart from "../../util/chart/DemoLineChart";
import DemoRadarChart from "../../util/chart/DemoRadarChart";
import DemoBarChart from "../../util/chart/DemoBarChart";
import { BiBriefcase } from "react-icons/bi";

export default function FeatureSection() {
    return (
        <div className="bg-white pb-28">
            <div className="flex justify-center p-20">
                <h1 className="font-poppins text-4xl font-semibold">
                    <span className="text-blue-500 brightness-90">Discover</span>
                    <span> </span>
                    Our Features
                </h1>
            </div>
            <div className="relative bg-white flex flex-row justify-center space-x-10 px-20">
                <Widget style="relative bg-slate-50 space-x-3 flex w-full"
                        Title="Compare Careers Requirements"
                        Description="Transform your interested career paths into compact widgets and save to your dashboard">
                    <div className="bg-white w-60 rounded-2xl">
                        <DemoRadarChart index={1}/>
                    </div>
                    <div className="bg-white w-60 rounded-2xl">
                        <DemoRadarChart index={0}/>
                    </div>
                </Widget>
                <Widget style="relative flex w-full"
                        Title="Explore Demand Skills"
                        Description="Discover list of most popular skills from thousands of job posts for your interested position, company, or field"
                >
                    <div className="relative flex flex-col w-full">
                        <div className="relative mt-5 mx-5 -mb-3">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <BiBriefcase className="text-gray-500" />
                            </div>
                            <input type="text" id="input-group-1"
                                   className="border border-gray-300 text-sm rounded-lg block w-full ps-10 p-2.5 text-gray-400"
                                   placeholder="E.g Embedded Engineer"/>
                        </div>
                        <div className="relative flex -mt-4 mx-5 h-52">
                            <DemoBarChart index={1}/>
                        </div>
                    </div>
                </Widget>
                <Widget style="relative pr-10 flex w-full"
                        Title="Discover Job Trends"
                        Description="Examine trends of your interested positions based on appearance frequencies from the market"
                >
                    <DemoLineChart />
                </Widget>

            </div>
        </div>
    )
}