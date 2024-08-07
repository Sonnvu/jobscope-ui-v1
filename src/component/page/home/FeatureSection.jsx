import Widget from "../../util/card/Widget";
import DemoBarChart from "../../util/chart/DemoBarChart";
import DemoLineChart from "../../util/chart/DemoLineChart";
import DemoPolarArea from "../../util/chart/DemoPolarArea";
import DemoRadarChart from "../../util/chart/DemoRadarChart";

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
            <div className="bg-white flex flex-row justify-center space-x-10 px-20">
                <Widget style="bg-slate-50 space-x-3">
                    <div className="relative bg-white rounded-2xl">
                        <DemoRadarChart index={0} />
                    </div>
                    <div className="relative bg-white rounded-2xl">
                        <DemoRadarChart index={1} />
                    </div>
                </Widget>
                <Widget style={"pr-10"}
                        Title="TITLE NAME"
                        Description="Adsjafldsjfkasdjfkldjsalfjsdaklfsdjflksajdf
                                    dfsfadsflasdjfls
                                    afsdfjd;slja;flkdsjflksjdflkajsdfl;djfal;djfk
                                    fadsjfsdjlafkdjsalfjdsklafjdklsjfklsajflskdjfd
                                    dfasfasfj"
                >
                    <DemoLineChart />
                </Widget>
                <Widget>
                    <DemoPolarArea />
                </Widget>

            </div>
        </div>
    )
}