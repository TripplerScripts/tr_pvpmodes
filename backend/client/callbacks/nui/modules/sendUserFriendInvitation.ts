import sendUserFriendInvitation from '../APIs/sendUserFriendInvitation'

export default () => RegisterNuiCallback('sendUserFriendInvitation', async (data, callback) =>
  callback(await sendUserFriendInvitation(null, data[0]))
)