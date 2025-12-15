onNet('tr_spawn/server/logout', () => {
  exports.qbx_core.Logout(source)
  emitNet('tr_spawn/client/logout', source)
})