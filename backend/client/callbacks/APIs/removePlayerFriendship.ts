import lib from '../../lib'

export default async function removePlayerFriendship(timeout: number, name: string): Promise<typeof response> {
  const response = await lib.callback.await('removePlayerFriendship', timeout, name)
  return response
}