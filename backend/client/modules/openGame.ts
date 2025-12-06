import nuiMessage from '../components/nuiMessage'
import placePlayerInLobby from './placePlayer'
import doesUserAlreadyExist from '../callbacks/APIs/doesUserAlreadyExist'

export default function openClosedWorldGame() {
  setTimeout(async () => {
    const exist = await doesUserAlreadyExist(1500)
    nuiMessage({
      action: 'open',
      exist: exist
    })
    SetNuiFocus(true, true)
  }, 2000)
  return placePlayerInLobby()
}