import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, index) => (
      <div key={index}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
)

export default Messages
