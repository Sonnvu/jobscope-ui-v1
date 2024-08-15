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
        <div className="bg-slate-100 py-10">
            <div className="mx-80 p-10 pr-20 h-96 rounded-2xl bg-white">
                <BarChart data={data} overwrite="h-full w-full"/>
            </div>
        </div>
    )
}