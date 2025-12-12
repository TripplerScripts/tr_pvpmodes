import createUser from '../../APIs/callbacks/createUser'

export default () => RegisterNuiCallback('createUser', async (data, callback) =>{
  callback(await createUser(null, data[0], data[1]))}
)