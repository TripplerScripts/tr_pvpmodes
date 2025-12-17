import fetchDiscordServer from '../services'

const lib = globalThis.exports.tr_lib.init()

lib.callback.register('getDiscordUserRole', async (source: string, discordUserId: string) => {
  return await fetchDiscordServer(discordUserId)
})