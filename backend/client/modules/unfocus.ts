import setCoords from '../components/setCoords'

export default function unFocus(lastCoords: number[], camHandle: number) {
  SetNuiFocus(false, false)
  exports.tr_kit.destroyCam(camHandle)
  setTimeout(() => {
    setCoords(lastCoords)
  }, 200)
  FreezeEntityPosition(PlayerPedId(), false)
}