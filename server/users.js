let users = []

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  )

  if (!name || !room) {
    return { error: 'Username and room are required.' }
  }
  if (existingUser) {
    return { error: 'Username already taken' }
  }

  const user = { id, name, room }
  users.push(user)
  console.log(users)

  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if (index !== -1) {
    users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  const backUser = users.find((user) => user.id === id)
  return backUser
}

const getUsersInRoom = (room) =>
  users.filter((user) => user.room === room)

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
}
