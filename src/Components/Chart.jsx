import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, 
    LineElement, 
    CategoryScale,
     LinearScale, 
     PointElement, 
     Title, 
     Tooltip, 
     Legend } from 'chart.js' 

     ChartJS.register(
        LineElement, 
        CategoryScale,
         LinearScale, 
         PointElement, 
         Title, 
         Tooltip, 
         Legend
     )

const Chart = ({ arr = [] , currency, days }) => {
         const prices=[];
         const date = [];

         for (let i = 0; i < arr.length; i++) {
            if(days === "24")  date.push(new Date(arr[i][0]).toLocaleDateString());
           else date.push(new Date(arr[i][0]).toLocaleDateString());
            prices.push(arr[i][1]);
            
         }

            const data = {
                    labels: date,
                    datasets: [
                        {
                            label: `Price in ${"inr"}`,
                            data: prices,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                

            };

            return (
            <Line
                options={{
                    responsive: true,
                }}
                data={data}
            />
            )
}

export default Chart
