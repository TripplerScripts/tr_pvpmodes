import setCoords from '../components/setCoords'
import { lobby, cam } from '../config/lobby'

export default function placePlayerInLobby() {
  const handle = exports.tr_kit.createCam({
    coords: cam,
    rotation: { vertical: 2.0, horizontal: 0.0 },
    more: {
      fov: 50.0
    }
  })
  setTimeout(() => {
    setCoords(lobby)
    FreezeEntityPosition(PlayerPedId(), true)
  }, 2000)
  return handle
}