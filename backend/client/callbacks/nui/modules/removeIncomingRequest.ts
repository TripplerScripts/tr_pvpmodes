import getUserProfile from '../../APIs/getUserProfile'

export default (): void => RegisterNuiCallback('getUserProfile', async (data: Array<any>, callback: (response: any) => void) =>
  callback(await getUserProfile(null, data[0]))
)