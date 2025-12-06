import acceptFriendship from '../../APIs/acceptFriendship'

export default () => RegisterNuiCallback('acceptFriendship', (data: Array<string>, callback: (response: any) => void) => {
  const response = acceptFriendship(null, data[0])
  callback(response)
})