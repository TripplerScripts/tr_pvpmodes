import nuiMessage from '../wrappers/nuiMessage'
import placePlayerInLobby from './placePlayer'

export default function openClosedWorldGame(resourceName: string) {
  nuiMessage({
    action: 'open',
    resource: resourceName
  })
  SetNuiFocus(true, true)
  placePlayerInLobby()
}