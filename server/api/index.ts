import { fatal, onPromise, triggerPromise } from '@trippler/tr_lib/server'
import fetchDiscordServer from '../services'
import { playersSources } from '..'
import { info } from 'console'

onPromise('createNewMessageRequest', (senderSource, message: string) => {
  try {
    playersSources.forEach(async source => {
      const discordId = GetPlayerIdentifierByType(senderSource as any, 'discord')
      if (!discordId) {
        info(`could not retrieve the sender ${GetPlayerName(senderSource)} [#id: ${senderSource}]'s discord Id`)
        return false
      }
      const userDiscordId = exports.tr_lib.init().split(discordId, ':')[1]
      const userRole = await fetchDiscordServer(userDiscordId)
      if (!userRole) {
        info(`could not retrieve the sender ${GetPlayerName(senderSource)} [#id: ${senderSource}]'s role`)
        return false
      }
      triggerPromise('createNewMessage', source, message, userRole)
    })
    return true
  } catch (error) {
    throw fatal(error)
  }
})