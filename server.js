const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.of('/stock-data').on('connect', socket => {
   setInterval(() => {
        socket.emit('data', {
            price: rand(129, 133),
            symbol: 'DIS',
            timestamp: getDate()
        })
   }, 1000)
})

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser())

function getDate(){
  const date = new Date

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  
  if(hours > 12) hours = hours - 12
  if(minutes < 10) minutes = `0${minutes}`
  if(seconds < 10) seconds = `0${seconds}`

  return `${hours}:${minutes}:${seconds}`
}

function rand(min, max) {
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2))
}

http.listen(5001)