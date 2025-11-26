import setCoords from '../wrappers/setCoords'
import { lobby, cam } from '../config/lobby'

export default function placePlayerInLobby() {
  setCoords(lobby)
  exports.tr_kit.createCam({
    coords: cam,
    rotation: { vertical: 0.0, horizontal: 0.0 },
  })
}