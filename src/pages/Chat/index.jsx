import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Messages from './Messages'

const initialState = [
  {
    id: 1,
    user: 'doctor',
    type: 'doctor',
    message: 'Hola, como estas?',
    created: '2020-06-01'
  },
  {
    id: 2,
    user: 'px',
    type: 'px',
    message: 'Hola, como estas?',
    created: '2020-06-01T00:00:00.000Z'
  },
]

function ChatPage() {
  const [messages, setMessages] = React.useState(initialState)
  const location = useLocation()
  console.log("location", location)
  const dummy = useRef()
  const user = {
    type: location.state.typeUser === 'doctor' ? 'doctor' : 'px',
    name: location.state.name
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h3>
        ChatPage
      </h3>
      <section className='chat__box_container'>
        {
          messages.map(message => (
            <div
              key={message.id}
              className={`d-flex ${message.type === user.type && 'flex-row-reverse'} `}>
              <section 
              className={`chat__message ${message.type !== user.type && 'bg-secondary'} `}
              >
                <p>
                  {message.user}
                </p>
                <p>
                  {message.message}
                </p>
                <p>
                  {message.created}
                </p>
              </section>
            </div>
          ))
        }
        {/* <Messages messages={messages} /> */}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu mensaje"
          ref={dummy}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setMessages([
              ...messages,
              {
                id: messages.length + 1,
                user: user.type,
                type: user.type,
                message: dummy.current.value,
                created: new Date().toISOString()
              }
            ])
            dummy.current.value = ''
          }
          }>Send</button>
      </form>
    </div>
  )
}

export default ChatPage