import removeIncomingRequest from '../../APIs/callbacks/removeIncomingRequest'

export default () => RegisterNuiCallback('removeIncomingRequest', async (data, callback) =>
  callback(await removeIncomingRequest(undefined, data[0]))
)