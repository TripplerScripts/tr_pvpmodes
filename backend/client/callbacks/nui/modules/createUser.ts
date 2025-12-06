import createUser from '../../APIs/createUser'

export default (): void => {
  RegisterNuiCallback('createUser', async (data: { name: string }, callback: (response: any) => void): Promise<void> => {
    const response = await createUser(null, data[0])
    callback(response)
  })
}