import {useEffect, useState} from "react";
import DemoBarChart from "../chart/DemoBarChart";
import DemoPolarArea from "../chart/DemoPolarArea";
import DemoLineChart from "../chart/DemoLineChart";

export const ChartAnimation = () => {
    const [currentChart, setCurrentChart] = useState(0);
    const charts = [
        <DemoBarChart index={0}/>,
        <DemoPolarArea />,
        <DemoLineChart />
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentChart((prevChart) => (prevChart + 1) % charts.length);
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
        <div className="flex w-full h-full">
            {charts[currentChart]}
        </div>
    )
}
