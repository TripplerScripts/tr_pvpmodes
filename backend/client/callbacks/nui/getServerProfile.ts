import { ServerProfile } from '../../types'

export default () => RegisterNuiCallback('getServerProfile', async (_data, callback) => {
  const profile: ServerProfile = {
    name: 'Trippler Scripts',
    avatar: 'https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png'
  }
  callback(profile)
})