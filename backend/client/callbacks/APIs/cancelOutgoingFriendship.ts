import lib from '../../lib'

export default async function cancelOutgoingFriendship(timeout: number, name: string): Promise<typeof response> {
  const response = await lib.callback.await('cancelOutgoingFriendship', timeout, name)
  return response
}