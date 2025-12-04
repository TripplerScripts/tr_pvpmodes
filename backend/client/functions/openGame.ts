import nuiMessage from '../wrappers/nuiMessage'
import placePlayerInLobby from './placePlayer'
import { lib } from '../wrappers/lib'

RegisterNuiCallback('createUser', (data: { name: string }, cb: (success: boolean) => void) => {
  const success = lib.callback.await('createUser', null, data[0])
  cb(success)
})

export default function openClosedWorldGame() {
  setTimeout(async () => {
    const exist = await lib.callback.await('doesUserAlreadyExist', 1500) as boolean
    nuiMessage({
      action: 'open',
      exist: exist
    })
    SetNuiFocus(true, true)
  }, 2000)
  return placePlayerInLobby()
}