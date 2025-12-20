import { onPromise } from '@trippler/tr_lib/server'
import fetchDiscordServer from '../services'

onPromise('getDiscordUserRole', async (source: string, discordUserId: string) => {
  return await fetchDiscordServer(discordUserId)
})