import sendUserFriendInvitation from '../APIs/sendUserFriendInvitation'


RegisterNuiCallback('sendUserFriendInvitation', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
  const response = await sendUserFriendInvitation(null, data[0])
  callback(response)
})