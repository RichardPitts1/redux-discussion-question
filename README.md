# Redux Discussion Question

1. Run `npm install`
2. Run `npm start`
3. Review the files in this repository
4. Use the `useSubscription` hook in `DisneyStockChart.js` to subscribe to the stock data for DIS at `http://localhost:5001/stock-data`
> `useSubscription` Example Usage:
```
   useSubscription(endpoint : string, callback : Function)
```
5. Send the stock data from the subscription to the redux store and save the data in state.
6. Ensure that this works using the redux devtools
7. Use `useSelector` to get the stock data from the redux state in `DisneyStockChart.js`
8. Feed the data from the redux state into the Chart.js chart to create a realtime graph of disney stock prices