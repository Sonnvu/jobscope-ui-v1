import {defaults} from "chart.js/auto"
import {Radar} from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const dataSet = [
    {
        labels: [
            'ASICS',
            'FPGA',
            'C++',
            'C',
            'VHDL',
            'Assembly',
            'RTOs'
        ],
        datasets: [{
            label: 'Embedded Engineer',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            // backgroundColor: 'rgba(255, 99, 132, 0.2)',
            // borderColor: 'rgb(255, 99, 132)',
            // pointBackgroundColor: 'rgb(255, 99, 132)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(255, 99, 132)'

            //blue
            backgroundColor: 'rgba(153,167,224,0.2)',
            borderColor: 'rgb(107,123,252)',
            pointBackgroundColor: 'rgb(89,107,203)',
            pointBorderColor: '#6c82e7',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(93,100,194)'
        }]
    },
    {
        labels: [
            'Java',
            'C#',
            '.NET',
            'Docker',
            'React',
            'Angular',
            'Spring Boot'
        ],
        datasets: [{
            label: 'Software Engineer',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    }
]

export default function DemoRadarChart({index}) {
    return (
        <div className="w-full h-full p-1">
            <Radar
                data={{
                    labels: dataSet[index].labels,
                    datasets: dataSet[index].datasets,
                }}
                options={{
                    scales: {
                        r: {
                            angleLines: {
                                display: false
                            },
                            min: 0,
                            max: 100,
                            ticks: {
                                callback: function() {return ""},
                                backdropColor: "rgba(0, 0, 0, 0)"
                            }
                        }
                    },
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                }}
            />
        </div>
    )
}