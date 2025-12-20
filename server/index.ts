import { onPromise, triggerPromise } from '@trippler/tr_lib/server'
import './api'
const playersSources: number[] = [1, 2]

onPromise('createNewMessageRequest', (senderSource: number, message: string) => {
  playersSources.forEach(source => {
    const discordId = GetPlayerIdentifierByType(senderSource as any, 'discord')
    const userDiscordId = exports.tr_lib.init().split(discordId, ':')[1]
    triggerPromise('createNewMessage', null, source, message, userDiscordId)
  });
  return true
})

on("playerDropped", (_reason: string, _resourceName: string, _clientDropReason: number) => {
  playersSources.splice(playersSources.indexOf(source), 1)
});

on("playerJoining", (_source: number, oldID: string) => {
  playersSources.push(source)
});