import { fatal, trace } from "@trippler/tr_lib/shared"
import { defaultSpawnCoords, playerCharacterInfo } from "../../shared/constants/config"

export let modeSelected: string | undefined

export const onPlayerLoaded = () => {
  emitNet('QBCore:Server:OnPlayerLoaded')
  emit('QBCore:Client:OnPlayerLoaded')
}

export const preparePlayerCharacterPed = async (citizenId: string) => {
  const [ clothes, model ] = await exports.tr_onboarding.getCharacterPreviewData(citizenId)

  RequestModel(model)
  await new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (HasModelLoaded(model)) {
        clearInterval(interval)
        resolve()
      }
    }, 1000)
  })
  return [ clothes, model ]
}

export const loadPlayerCharactersPed = async (model: string, clothes: string, citizenId: string) => {
  SetPlayerModel(PlayerId(), model)
  exports['illenium-appearance'].setPedAppearance(PlayerPedId(), JSON.parse(clothes))
  SetModelAsNoLongerNeeded(model)
  exports.tr_onboarding.loadCharacter(citizenId)
  onPlayerLoaded()
}

export const spawnPlayerPed = (spawnCoords: number[]) => {
  exports.spawnmanager.spawnPlayer({
    x: spawnCoords[0],
    y: spawnCoords[1],
    z: spawnCoords[2],
    heading: spawnCoords[3]
  })
}

export const createPlayerNewCharacter = async () => {
  const newCreatedCharacter = await exports.tr_onboarding.createNewCharacter(null, playerCharacterInfo)
  if (!newCreatedCharacter) {
    trace('Lenix got no idea why this is failing')
  }
}

export const openAppearanceMenu = (onClothingMenuOpen: Function, onSubmitOrCancel: Function) => {
  onClothingMenuOpen && onClothingMenuOpen()
  emit('qb-clothes:client:CreateFirstCharacter', onSubmitOrCancel, onSubmitOrCancel)
}

export const selecteGameMode = (mode: string) => {
  if (mode === 'competitive') {
    if (GetResourceState('tr_competitive') !== 'started') fatal('tr_competitive is not started')
    globalThis.exports.tr_competitive.start()
    modeSelected = mode
  } else if (mode === 'freeroam') {
    if (GetResourceState('tr_freeroam') !== 'started') fatal('tr_freeroam is not started')
    globalThis.exports.tr_freeroam.start()
    modeSelected = mode
  }
}

export const logoutPlayer = () => emitNet('tr_onboarding/server/logout')

export const getPlayerCharacterCitizenId = async () => {
  const characters = await exports.tr_onboarding.getPlayerCharacters()
  if (characters.length > 0) {
    return characters[0].citizenid
  } else {
    if (characters.length === 0) return false
  }
}