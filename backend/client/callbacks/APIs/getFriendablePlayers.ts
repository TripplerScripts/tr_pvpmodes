import lib from '../../lib'

export default async function getFriendablePlayers(timeout?: number): Promise<typeof response> {
  const response = await lib.callback.await('getFriendablePlayers', timeout)
  return response
}