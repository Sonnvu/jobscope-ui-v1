import {defaults} from "chart.js/auto";
import {Line} from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
export default function DemoLineChart() {
    return (
        <div className="w-full h-full p-10">
            <Line data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [
                    {
                        data: [100, 59, 42, 52, 56, 55, 40, 90],
                        fill: {
                            target: 'origin',
                            above: 'rgba(171,183,255,0.2)',   // Gradient area color
                        },
                        tension: 0.2,
                        borderColor: 'rgb(132,178,255)',   // Line color
                        borderWidth: 2,
                        pointBackgroundColor: 'rgb(155,187,255)', // Point color
                        pointHoverBorderColor: 'rgb(99,154,255)',        // Hover point border color
                    },
                    {
                        data: [90, 80, 70, 90, 69, 38, 20, 30],
                        fill: {
                            target: 'origin',
                            above: 'rgba(187,132,255,0.2)',   // Gradient area color
                        },
                        tension: 0.2,
                        borderColor: 'rgb(148,132,255)',   // Line color
                        borderWidth: 2,
                        pointBackgroundColor: 'rgb(165,155,255)', // Point color
                        pointHoverBorderColor: 'rgb(133,99,255)',        // Hover point border color
                    }
                ],
            }}
                  options={{
                      scales: {
                          y: {
                              beginAtZero: true,
                              display: false
                          },
                      },
                      plugins: {
                          legend: {
                              display: false, // Hide legend
                          },
                      },
                      elements: {
                          point: {
                              radius: 4, // Point radius
                              hoverRadius: 6, // Hover point radius
                          },
                      },
                  }}
            />
        </div>
    )
}
