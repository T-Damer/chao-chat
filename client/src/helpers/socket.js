import { io } from 'socket.io-client'

const ENDPOINT = 'https://chao-chat.herokuapp.com/'

export const socket = io(ENDPOINT)
export let socketID = ''
socket.on('connect', () => {
  socketID = socket.id
})
