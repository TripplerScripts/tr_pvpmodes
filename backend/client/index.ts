exports('playerHasCharacter', async () => {
  const characters = await exports.tr_spawn.getPlayerCharacters()
  if (characters.length > 0) {
    return characters[0].citizenid
  } else {
    if (characters.length === 0) return false
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