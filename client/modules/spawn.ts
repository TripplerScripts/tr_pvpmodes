

const getSpawnCoords = () => {
  if (spawnLastLocation !== true) {
    return spawnLastLocation
  }
  const playerData = exports.qbx_core.GetPlayerData()
  if (!playerData?.position) return

  return [ playerData.position.x, playerData.position.y, playerData.position.z, playerData.position.w ]
}