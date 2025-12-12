import removeIncomingRequest from '../APIs/removeIncomingRequest'

export default () => RegisterNuiCallback('removeIncomingRequest', async (data, callback) =>
  callback(await removeIncomingRequest(null, data[0]))
)