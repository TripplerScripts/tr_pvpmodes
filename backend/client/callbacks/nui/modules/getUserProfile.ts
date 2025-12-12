import getUserProfile from '../APIs/getUserProfile'

export default () => RegisterNuiCallback('getUserProfile', async (data, callback) => {
  callback(await getUserProfile(null, data[0]))
})