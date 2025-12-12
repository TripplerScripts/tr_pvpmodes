import removeIncomingRequest from '../APIs/removeIncomingRequest'

export default () => RegisterNuiCallback('removeIncomingRequest', async (data: Array<any>, callback: (response: any) => void) =>
  callback(await removeIncomingRequest(null, data[0]))
)