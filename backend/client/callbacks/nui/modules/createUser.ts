import createUser from '../APIs/createUser'

export default () => RegisterNuiCallback('createUser', async (data, callback) =>{
  callback(await createUser(null, data[0], data[1]))}
)