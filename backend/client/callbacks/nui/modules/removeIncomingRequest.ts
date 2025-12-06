import removeIncomingRequest from '../../APIs/removeIncomingRequest'

export default (): void => {
  RegisterNuiCallback('removeIncomingRequest', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
    const response = await removeIncomingRequest(null, data[0])
    callback(response)
  })
}