import { defaultSpawnCoords } from "../../shared/constants/config"
import { createPlayerNewCharacter, getPlayerCharacterCitizenId, loadPlayerCharactersPed, onPlayerLoaded, openAppearanceMenu, preparePlayerCharacterPed, spawnPlayerPed } from "../modules"
import { closeMainMenu } from "../nui"

export const startCharacterProcess = async (passedOnCreationFinishCoords: number[], passedSpawnCoords: number[], onClothingMenuOpen: Function, onSubmitOrCancel: Function) => {
  const citizenId = await getPlayerCharacterCitizenId()
  if (citizenId) {
    const [ clothes, model ] = await preparePlayerCharacterPed(citizenId)
    const spawnCoords = passedSpawnCoords || defaultSpawnCoords

    loadPlayerCharactersPed(model, clothes, citizenId)
    spawnPlayerPed(spawnCoords)
    closeMainMenu()
  } else {
    const onCreationFinishCoords = passedOnCreationFinishCoords || defaultSpawnCoords
    spawnPlayerPed(onCreationFinishCoords)
    await createPlayerNewCharacter()
    onPlayerLoaded()
    openAppearanceMenu(onClothingMenuOpen, onSubmitOrCancel)
  }
  return true
}