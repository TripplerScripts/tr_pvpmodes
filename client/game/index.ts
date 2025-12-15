import nuiMessage from ".."

export const closeGame = () => exports.tr_competitive.closeGame()

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
  exports.tr_competitive.createCam(0, 0, 0)
}