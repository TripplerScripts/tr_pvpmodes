import createUser from '../APIs/createUser'

export default () => RegisterNuiCallback('createUser', async (data: { name: string, avatar: string }, callback: (response: any) => void) =>{
  console.log(data)
  callback(await createUser(null, data[0], data[1]))}
)