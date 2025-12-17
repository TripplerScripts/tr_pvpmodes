import createNewMessage from "../components/createNewMessage"

window.addEventListener('message', (event) => {
  if (event.data.action === 'createNewMessage') {
    createNewMessage(event.data.message)
  }
})