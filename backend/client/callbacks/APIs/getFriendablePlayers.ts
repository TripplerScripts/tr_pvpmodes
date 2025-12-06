import lib from '../../lib'

export default async (timeout?: number): Promise<typeof response> => {
  const response = await lib.callback.await('getFriendablePlayers', timeout)
  return response
}