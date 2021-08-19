import React from 'react'
import HomePage from './pages/HomePage'
import { SocketProvider } from './context/SocketContext'

export default function BandNamesApp() {
    return (
        <SocketProvider>
            <HomePage/>
        </SocketProvider>
    )
}
