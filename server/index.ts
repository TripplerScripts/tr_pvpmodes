onNet('tr_onboarding/server/logout', () => {
  exports.qbx_core.Logout(source)
  emitNet('tr_onboarding/client/logout', source)
})