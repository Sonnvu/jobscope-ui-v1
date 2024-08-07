import {PolarArea} from "react-chartjs-2";
import { Chart as ChartJS, defaults} from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
export default function DemoPolarArea() {
    return (
        <div className="w-full pr-40">
            <PolarArea data={{
                datasets: [{
                    label: 'My First Dataset',
                    data: [30, 21, 35, 25, 33, 23, 36],
                    backgroundColor: [

                        //Colorful
                        // 'rgb(255, 99, 132, 0.4)',
                        // 'rgb(75, 192, 192, 0.4)',
                        // 'rgb(255, 205, 86, 0.4)',
                        // 'rgb(201, 203, 207, 0.4)',
                        // 'rgb(54, 162, 235, 0.4)',
                        // 'rgb(255, 205, 86, 0.4)',
                        // 'rgb(107,159,255, 0.4)'

                        'rgba(102,127,255,0.4)',
                        'rgba(102,156,255,0.4)',
                        'rgba(62,64,192,0.4)',
                        'rgba(152,162,253,0.4)',
                        'rgba(94,150,255,0.4)',
                        'rgba(63,77,255,0.4)',
                        'rgba(185,196,255,0.4)',
                    ]
                }]
            }}
                       options={{
                           indexAxis: 'y', // Display bars vertically
                           scales: {
                               x: {
                                   beginAtZero: true,
                                   display: false
                               },
                               y: {
                                   display: false
                               },
                           },
                           plugins: {
                               legend: {
                                   display: false, // Hide legend
                               },
                           },
                       }}
            />
        </div>
    )
}
