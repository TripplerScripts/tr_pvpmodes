import lib from '../../lib'

export default async (timeout: number, name: string): Promise<typeof response> => {
  const response = await lib.callback.await('removeIncomingRequest', timeout, name)
  return response
}