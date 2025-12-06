import setCoords from '../components/setCoords'

export default (lastCoords: number[], camHandle: number): void => {
  SetNuiFocus(false, false)
  exports.tr_kit.destroyCam(camHandle)
  setTimeout(() => {
    setCoords(lastCoords)
  }, 200)
  FreezeEntityPosition(PlayerPedId(), false)
}