import nuiMessage from '../wrappers/nuiMessage'
import placePlayerInLobby from './placePlayer'

export default function openClosedWorldGame(resourceName: string) {
  setTimeout(() => {
    nuiMessage({
      action: 'open',
      resource: resourceName
    })
    SetNuiFocus(true, true)
  }, 2000)
  return placePlayerInLobby()
}