import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSubscription } from '../subscription'
import { useDispatch, useSelector } from 'react-redux'

export const DisneyStockChart = () => {

    // ?
    
    const stocks = [] // ?

    const chartData = {
        labels: stocks.map( stock => stock.timestamp ),
        datasets: [
            {
                label: 'DIS',
                data: stocks.map( stock => stock.price)
            }
        ]
    }
   
    return (
        <div>
            <h1>DIS</h1>
            <Line data={chartData} />
        </div>
    )
}