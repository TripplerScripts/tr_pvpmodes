import sendUserFriendInvitation from '../../APIs/callbacks/sendUserFriendInvitation'

export default () => RegisterNuiCallback('sendUserFriendInvitation', async (data, callback) =>
  callback(await sendUserFriendInvitation(null, data[0]))
)