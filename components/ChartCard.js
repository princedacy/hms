import { options } from "./ChartConfig";
import { Bar } from "react-chartjs-2";

function ChartCard() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Brutto",
        borderRadius: 30,
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4],
        backgroundColor: "rgba(32, 214, 155, 1)",
        barThickness: 10,
      },
      {
        label: "Netto",
        borderRadius: 20,
        data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4],
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
      },
    ],
  };

  return (
    <div className='bg-white rounded-lg drop-shadow-sm p-4 mt-6'>
      <Bar data={data} maxWidth={300} options={options}/>
    </div>
  );
}

export default ChartCard;
