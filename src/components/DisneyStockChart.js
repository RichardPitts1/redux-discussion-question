import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSubscription } from '../subscription'
import { useDispatch, useSelector } from 'react-redux'

export const DisneyStockChart = () => {
    const dispatch = useDispatch()

    useSubscription('http://localhost:5001/stock-data', point => {
        dispatch({ type: 'NEW_DATA', point })
    })
    
    const stocks = useSelector( state => state.stockData )

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