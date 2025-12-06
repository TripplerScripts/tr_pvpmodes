import lib from '../../lib'

export default async function doesUserAlreadyExist(timeout?: number): Promise<typeof response> {
  const response = await lib.callback.await('doesUserAlreadyExist', timeout)
  return response
}