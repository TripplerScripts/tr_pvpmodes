import getUserProfile from '../APIs/getUserProfile'

export default (): void => RegisterNuiCallback('getUserProfile', async (data: Array<any>, callback: (response: any) => void) => {
  const response = await getUserProfile(null, data[0])
  callback(response)
})