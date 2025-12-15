import createUser from '../../api/callbacks/createUser'

export default () => RegisterNuiCallback('createUser', async (data, callback) =>
  callback(await createUser(undefined, data[0], data[1]))
)



import getUserProfile from '../../api/callbacks/getUserProfile'

export default () => RegisterNuiCallback('getUserProfile', async (data, callback) =>
  callback(await getUserProfile(undefined, data[0]))
)