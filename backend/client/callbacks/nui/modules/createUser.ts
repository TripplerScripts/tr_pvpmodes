import createUser from '../../APIs/createUser'

export default (): void => RegisterNuiCallback('createUser', async (data: { name: string }, callback: (response: any) => void) =>
  callback(await createUser(null, data[0]))
)