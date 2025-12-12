import getUserProfile from '../../APIs/callbacks/getUserProfile'

export default () => RegisterNuiCallback('getUserProfile', async (data, callback) => {
  callback(await getUserProfile(null, data[0]))
})