import setCoords from './setCoords'

export default (lastCoords: number[], camHandle: number) => {
  SetNuiFocus(false, false)
  exports.tr_kit.destroyCam(camHandle)
  setTimeout(() => {
    setCoords(lastCoords)
  }, 200)
  FreezeEntityPosition(PlayerPedId(), false)
}