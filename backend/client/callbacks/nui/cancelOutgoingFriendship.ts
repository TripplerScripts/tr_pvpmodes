import cancelOutgoingFriendship from '../APIs/cancelOutgoingFriendship'

export default (): void => {
  RegisterNuiCallback('cancelOutgoingFriendship', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
    const response = await cancelOutgoingFriendship(null, data[0])
    callback(response)
  })
}