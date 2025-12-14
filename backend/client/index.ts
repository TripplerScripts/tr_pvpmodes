exports('playerHasCharacter', async () => {
  const characters = await exports.tr_spawn.getPlayerCharacters()
  if (characters.length > 0) {
    return characters[0].citizenid
  } else {
    if (characters.length === 0) return false
  }
})

exports('startCharacterProcess', async (onCreationFinishCoords: [number, number, number, number], onClothingMenuOpen: Function, onSubmitOrCancel: Function) => {
  const citizenId = await exports.tr_spawn.playerHasCharacter()
  if (citizenId) {
    const [ clothes, model ] = await exports.tr_spawn.getCharacterPreviewData()
    RequestModel(model)
    const interval = setInterval(() => {
      if (HasModelLoaded(model)) {
        clearInterval(interval)
      }
    })

    SetPlayerModel(PlayerId(), model)
    exports['illenium-appearance'].setPedAppearance(PlayerPedId(), JSON.parse(clothes))
    SetModelAsNoLongerNeeded(model)

    exports.tr_spawn.loadCharacter(citizenId)

    emitNet('QBCore:Server:OnPlayerLoaded')
    emit('QBCore:Client:OnPlayerLoaded')
    exports.spawnmanager.spawnPlayer({
      x: 298.5893,
      y: -581.2991,
      z: 43.260,
      heading: 111.2940
    })
  } else {
    const data = {
      firstname: 'not specified',
      lastname: 'not specified',
      nationality: 'not specified',
      gender: 'not specified',
      birthdate: 'not specified',
      cid: -1
    }
    const newCreatedCharacter = await exports.tr_spawn.createNewCharacter(null, data)
    emitNet('QBCore:Server:OnPlayerLoaded')
    emit('QBCore:Client:OnPlayerLoaded')

    if (newCreatedCharacter) {
      onClothingMenuOpen()
      emit('qb-clothes:client:CreateFirstCharacter', onSubmitOrCancel(), onSubmitOrCancel())
    }
  }
})

const startSession = () => {
  RegisterNuiCallback('DOMContentLoaded', (data: any[], cb: Function) => {
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
    cb(true)
  })
}

exports('startSession', startSession)