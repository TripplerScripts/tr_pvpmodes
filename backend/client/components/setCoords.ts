export default (coords: number[]): void => {
  SetEntityCoords(PlayerPedId(), coords[0], coords[1], coords[2], true, false, true, false)
  if (coords[3] !== undefined) SetEntityHeading(PlayerPedId(), coords[3])
}