import './api'
const lib = globalThis.exports.tr_lib.init()
const playersSources: number[] = [5]

lib.callback.register('createNewMessageRequest', (source: number, message: string) => {
  playersSources.forEach(source => {
    const userDiscordId = GetPlayerIdentifierByType(5 as any, 'discord')
    lib.callback.await('createNewMessage', null, source, message, userDiscordId)
  });
  return true
})

on("playerDropped", (_reason: string, _resourceName: string, _clientDropReason: number) => {
  playersSources.splice(playersSources.indexOf(source), 1)
});

on("playerJoining", (_source: number, oldID: string) => {
  playersSources.push(source)
});