import lib from '../../lib'

export default async function getIncomingFriends(timeout?: number): Promise<typeof response> {
  const response = await lib.callback.await('getIncomingFriends', timeout)
  return response
}