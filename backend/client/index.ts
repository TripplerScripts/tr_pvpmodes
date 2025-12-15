exports('playerHasCharacter', async () => {
  const characters = await exports.tr_spawn.getPlayerCharacters()
  if (characters.length > 0) {
    return characters[0].citizenid
  } else {
    if (characters.length === 0) return false
  }
})

exports('startCharacterProcess', async (passedOnCreationFinishCoords: [number, number, number, number], passedSpawnCoords: [number, number, number, number], onClothingMenuOpen: Function, onSubmitOrCancel: Function) => {
  const citizenId = await exports.tr_spawn.playerHasCharacter()
  if (citizenId) {
    const spawnCoords = passedSpawnCoords || [-2163.87, 1134.51, -24.37, 310.05]
    const [ clothes, model ] = await exports.tr_spawn.getCharacterPreviewData(citizenId)
    RequestModel(model)
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (HasModelLoaded(model)) {
          clearInterval(interval)
          resolve()
        }
      }, 1000)
    })

    SetPlayerModel(PlayerId(), model)
    exports['illenium-appearance'].setPedAppearance(PlayerPedId(), JSON.parse(clothes))
    SetModelAsNoLongerNeeded(model)

    exports.tr_spawn.loadCharacter(citizenId)

    exports.spawnmanager.spawnPlayer({
      x: spawnCoords[0],
      y: spawnCoords[1],
      z: spawnCoords[2],
      heading: spawnCoords[3]
    })

    emitNet('QBCore:Server:OnPlayerLoaded')
    emit('QBCore:Client:OnPlayerLoaded')
  } else {
    const onCreationFinishCoords = passedOnCreationFinishCoords || [-2163.87, 1134.51, -24.37, 310.05]
    const data = {
      firstname: 'not specified',
      lastname: 'not specified',
      nationality: 'not specified',
      gender: 'not specified',
      birthdate: 'not specified',
      cid: -1
    }
    exports.spawnmanager.spawnPlayer({
      x: onCreationFinishCoords[0],
      y: onCreationFinishCoords[1],
      z: onCreationFinishCoords[2],
      heading: onCreationFinishCoords[3]
    })
    const newCreatedCharacter = await exports.tr_spawn.createNewCharacter(null, data)
    emitNet('QBCore:Server:OnPlayerLoaded')
    emit('QBCore:Client:OnPlayerLoaded')

    if (newCreatedCharacter) {
      onClothingMenuOpen && onClothingMenuOpen()
      emit('qb-clothes:client:CreateFirstCharacter', onSubmitOrCancel, onSubmitOrCancel)
    }
  }
  return true
})

setImmediate(() => {
  const interval = setInterval(() => {
    if (NetworkIsSessionStarted()) {
      exports.tr_spawn.startSession()
      clearInterval(interval)
    }
  }, 1000)
})
const startSession = () => {
  SendNuiMessage(JSON.stringify({
    action: 'open'
  }))
  SetNuiFocus(true, true)

  RegisterNuiCallback('startPlay', (data: any[], cb: Function) => {
    SetNuiFocus(false, false)
    if (data[0] === 'competitive') {
      exports.tr_competitive.start()
      cb(true)
    } else {
      if (data[0] === 'freeroam') {
        exports.tr_freeroam.start()
        cb(true)
      } else throw new Error('Invalid game mode invoked')
    }
  })
}

onNet('tr_spawn/client/logout', () => {
  startSession()
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_spawn/server/logout')
  }
})

exports('startSession', startSession)