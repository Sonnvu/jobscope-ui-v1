import {Bar} from "react-chartjs-2";
import {twMerge} from "tailwind-merge";

export default function BarChart({data, overwrite}) {
    return (
        <div className={twMerge("", overwrite)}>
            <Bar data={data}
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