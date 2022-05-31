import React, { Fragment } from 'react'

function Messages({ messages = [] }) {
  if (!messages.length) return <span>No hay mensajes</span>

  return (
    <Fragment>
      {
        messages && messages.map((message) => <Message key={message.id} {...message} />)
      }
    </Fragment>
  )
}

function Message({ user, message, created, type }) {
  console.log("message", user, type, message, created)
  return (
    <div
      className={`d-flex ${message.type === type && 'flex-row-reverse'} `}>
      <p>
        {user}
      </p>
      <p>
        {message}
      </p>
      <p>
        {created}
      </p>
    </div>

  )
}
export default Messages