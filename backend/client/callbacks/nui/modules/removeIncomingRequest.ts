import removeIncomingRequest from '../../APIs/removeIncomingRequest'

export default (): void => RegisterNuiCallback('removeIncomingRequest', async (data: Array<string>, callback: (response: any) => void) =>
  callback(await removeIncomingRequest(null, data[0]))
)