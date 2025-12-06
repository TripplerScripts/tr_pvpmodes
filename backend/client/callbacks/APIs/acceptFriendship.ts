import lib from '../../lib'

export default async function acceptFriendship(timeout: number, name: string): Promise<typeof response> {
  const response = await lib.callback.await('acceptFriendship', timeout, name)
  return response
}