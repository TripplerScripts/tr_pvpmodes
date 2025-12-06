import lib from '../../lib'

export default async function getPlayerFriends(timeout?: number): Promise<typeof response> {
  const response = await lib.callback.await('getPlayerFriends', timeout)
  return response
}