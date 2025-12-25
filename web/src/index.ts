import './features'

window.addEventListener('message', (event) => {
  const message = event.data
  if (message.type === 'message') {
      console.log(message.message)
  } else {
    if (message.type === 'suggestion') {
      console.log(message.suggestion)
    } else {
      if (message.type === 'remove_suggestion') {
        console.log(message.name)
      } else throw new Error(`unexpected message type received ${message.type}`)
    }
  }
})