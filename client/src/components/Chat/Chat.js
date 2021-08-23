import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'

import './Chat.css'

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'http://localhost:5000/'

  let socket = io(ENDPOINT)

  useEffect(() => {
    const { name, room } = queryString.parse(
      location.search
    )

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })

    return () => {
      socket.disconnect()
      socket.off()
    }
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessage([...messages, message])
    })
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () =>
        setMessage('')
      )
    }
  }

  return (
    <div className="container__wrapper">
      <div className="chat__container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}

export default Chat
