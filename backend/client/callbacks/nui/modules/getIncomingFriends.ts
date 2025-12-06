import getIncomingFriends from '../../APIs/getIncomingFriends'

export default (): void => {
  RegisterNuiCallback('getIncomingFriends', async (_data: Array<any>, callback: (response: any) => void): Promise<void> => {
    const response = await getIncomingFriends()
    callback(response)
  })
}