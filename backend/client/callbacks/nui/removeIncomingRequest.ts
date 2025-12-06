import removeIncomingRequest from '../APIs/removeIncomingRequest'


RegisterNuiCallback('removeIncomingRequest', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
  const response = await removeIncomingRequest(null, data[0])
  callback(response)
})