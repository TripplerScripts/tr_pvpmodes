import acceptFriendship from '../../APIs/acceptFriendship'

export default (): void => {
  RegisterNuiCallback('acceptFriendship', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
    const response = await acceptFriendship(null, data[0])
    callback(response)
  })
}