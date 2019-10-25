# Redux Discussion Question

1). Run `npm install`
2). Run `npm start`
3). Review the files in this repository
4). Use the `useSubscription` hook in `subscription.js` to subscribe to data at `http://localhost:5001/stock-data`
5). Update the redux state with new data from the subscription using `stockReducer`. Ensure that this works using the redux devtools
6). Use `useSelector` to get the stock data from the redux state in `DisneyStockChart.js`
7). Feed the data from the redux state into the Chart.js chart to create a realtime graph of disney stock prices