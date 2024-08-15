import {Bar} from "react-chartjs-2";
import {defaults} from "chart.js/auto"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const data = [
    {
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
                borderRadius: '3'
            },
        ],
    },
    {
        labels: ["C", "C++", "Python", "VHDL", "FPGA"],
        datasets: [
            {
                data: [420, 300, 170, 100, 80],
                backgroundColor: [
                    'rgba(99,154,255,0.2)',
                    'rgba(64,109,255,0.2)',
                    'rgba(86,224,255,0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderRadius: '3'
            },
        ],
    }
]

export default function DemoBarChart({index}) {
    return (
        <div className="w-full h-full p-10">
            <Bar data={data[index]}
                options={{
                    indexAxis: 'y',
                    scales: {
                        x: {
                            beginAtZero: true,
                            display: false,
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Hide legend
                        },
                    },
                    elements: {
                        bar: {
                            borderWidth: 0, // Hide bar borders

                        },
                    },
                }}
            />
        </div>
    )
}
