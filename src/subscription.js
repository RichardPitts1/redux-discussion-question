import socketIO from 'socket.io-client'
import { useEffect } from 'react'

export const useSubscription = (endpoint, callback) => {
    useEffect(() => {
        const io = socketIO(endpoint)
        io.on('data', callback)
    }, [])
}