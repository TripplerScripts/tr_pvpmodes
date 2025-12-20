import nuiMessage from ".."
import createCam, { lastCamHandle } from './camera'
import { lobbyCoords, openDelay } from "../../shared/constants/config"
import { doesUserAlreadyExist } from "../api/user"

let lastPlayerCoords: number[] = []

const setCoords = (coords: number[]) => {
  SetEntityCoords(PlayerPedId(), coords[1], coords[2], coords[3], true, false, true, false)
  if (coords[4] != null) {
    SetEntityHeading(PlayerPedId(), coords[4])
  }
}

export const openGame = () => {
  placePlayerInLobby()
  setTimeout(() => {
    const identity = doesUserAlreadyExist()
    nuiMessage({ action: 'open', identity})
    SetNuiFocus(true, true)
  }, openDelay)
}

export const hideGame = () => {
  nuiMessage({
    action: 'hide'
  })
  SetNuiFocus(false, false)
}
export const showGame = () => {
  nuiMessage({
    action: 'show'
  })
  SetNuiFocus(true, true)
  createCam(0, 0, 0)
}
export const placePlayerInLobby = () => {
  createCam
  setTimeout(() => {
    const coords = GetEntityCoords(PlayerPedId(), true)
    lastPlayerCoords = [ ...coords ]
    setCoords(lobbyCoords)
    FreezeEntityPosition(PlayerPedId(), true)
  }, openDelay)
}

export const closeGame = () => {
  nuiMessage({ action: 'close' })
  SetNuiFocus(false, false)
  exports.tr_kit.destroyCam({handle: lastCamHandle})
  Wait(200)
  setCoords(lastPlayerCoords)
  FreezeEntityPosition(PlayerPedId(), false)
  TriggerServerEvent('tr_spawn/server/logout')
  return true
}

export default async () => exports.tr_onboarding.startCharacterProcess(lobbyCoords, lobbyCoords, hideGame, showGame)