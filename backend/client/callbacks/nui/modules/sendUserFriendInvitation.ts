import sendUserFriendInvitation from '../APIs/sendUserFriendInvitation'

export default (): void => RegisterNuiCallback('sendUserFriendInvitation', async (data: Array<string>, callback: (response: any) => void) =>
  callback(await sendUserFriendInvitation(null, data[0]))
)