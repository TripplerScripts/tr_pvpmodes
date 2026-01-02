import { triggerNuiCallback } from "@trippler/tr_lib/client"
import { spawn } from "../../shared/constants"

export const getSpawnCoords = () => {
  if (spawn.spawnLastLocation !== true) {
    return spawn.spawnLastLocation
  }
  const playerData = globalThis.exports.qbx_core.GetPlayerData()
  if (!playerData?.position) return

  return [ playerData.position.x, playerData.position.y, playerData.position.z, playerData.position.w ]
}

export const openEscapeMenu = () => {
  triggerNuiCallback('dashboard/openEscapeMenu')
}

export const logoutPlayer = () => {
  emitNet('tr_onboarding/server/logout')
}