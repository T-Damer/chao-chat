import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const ENDPOINT = 'http://localhost:3000/'

  useEffect(() => {
    const { name, room } = queryString.parse(
      location.search
    )

    let socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, ({}) => {})

    return () => {
      socket.io('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])

  return <h1>Chat</h1>
}

export default Chat
