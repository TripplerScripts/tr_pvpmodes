const lib = exports.tr_lib.init()

lib.callback.register('createNewMessageRequest', (source: string, message: string) => {
  getPlayers().forEach(player => {
    lib.callback.await('createNewMessage', null, player, message)
  });
  return true
})