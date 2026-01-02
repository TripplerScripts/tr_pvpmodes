export const logoutPlayer = (source: number) => {
  exports.qbx_core.Logout(source)
  emitNet('tr_onboarding/client/openMainMenu', source)
}

onNet('tr_onboarding/server/logoutPlayer', () => {
  logoutPlayer(source)
})

globalThis.exports('logoutPlayer', logoutPlayer)