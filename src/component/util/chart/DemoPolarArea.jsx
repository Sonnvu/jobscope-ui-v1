import {PolarArea} from "react-chartjs-2";
import {defaults} from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
export default function DemoPolarArea() {
    return (
        <div className="w-full h-full p-10">
            <PolarArea data={{
                datasets: [{
                    label: 'My First Dataset',
                    data: [30, 21, 35, 25, 33, 23, 36],
                    backgroundColor: [
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
