import sendUserFriendInvitation from '../../APIs/sendUserFriendInvitation'

export default (): void => {
  RegisterNuiCallback('sendUserFriendInvitation', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
    const response = await sendUserFriendInvitation(null, data[0])
    callback(response)
  })
}