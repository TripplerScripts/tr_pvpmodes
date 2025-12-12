import nuiMessage from '../components/nuiMessage'
import placePlayerInLobby from './placePlayer'
import doesUserAlreadyExist from '../APIs/callbacks/doesUserAlreadyExist'

export default () => {
  setTimeout(async () => {
    const identity = await doesUserAlreadyExist(1500)
    nuiMessage({
      action: 'open',
      identity: identity,
    })
    SetNuiFocus(true, true)
  }, 2000)
  return placePlayerInLobby()
}