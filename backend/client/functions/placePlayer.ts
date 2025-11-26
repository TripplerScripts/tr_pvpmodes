import setCoords from '../wrappers/setCoords'
import { lobby, cam } from '../config/lobby'

export default function placePlayerInLobby() {
  const handle = exports.tr_kit.createCam({
    coords: cam,
    rotation: { vertical: 0.0, horizontal: 0.0 },
  })
  setTimeout(() => {
    setCoords(lobby)
    FreezeEntityPosition(PlayerPedId(), true)
  }, 2000)
  return handle
}