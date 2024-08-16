import BarChart from "../../util/chart/customChart/BarChart";

const data = {
    labels: ["C/C++", "Python", "VHDL", "MATLAB", "CUDA", "FPGA", "Assembly"],
    datasets: [
        {
            data: [700, 500, 420, 300, 170, 100, 80],
            backgroundColor: [
                'rgba(99,154,255,0.2)',
                'rgba(64,109,255,0.2)',
                'rgba(86,224,255,0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(119,142,187,0.2)'
            ],
            borderRadius: '3',
        },
    ],
}

export default function ResultBarGraph() {
    return (
        <div className="bg-slate-100">
            <div className="mx-80 px-10 py-7 pr-20 rounded-2xl bg-white">
                <div className="pl-5">
                    <p className="text-lg font-poppins font-medium text-gray-600">Skill Requirement for: FPGA Design Engineer</p>
                </div>
                <div className="pl-5">
                    <p className="text-sm font-poppins text-gray-400">Last 1 month</p>
                </div>
                <div className="h-96 pt-2">
                    <BarChart data={data} overwrite="h-full w-full"/>
                </div>
                
            </div>
        </div>
    )
}