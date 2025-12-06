import lib from '../../lib'

export default async (timeout: number, name: string): Promise<typeof response> => {
  const response = await lib.callback.await('createUser', timeout, name)
  return response
}