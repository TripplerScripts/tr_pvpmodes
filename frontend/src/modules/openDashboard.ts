import initOnBoarding from './onBoard'
import createUser from '../APIs/createUser'
import playerDetails from './playerDetails'

export default async (identity: number | boolean): Promise<void> => {
  const root = document.getElementById('root')
  if (!identity) {
    const { userName, userAvatar } = await initOnBoarding()
    const identity = await createUser(userName, userAvatar)
    new playerDetails().getUserDetails(identity, true)
  } else {
    new playerDetails().getUserDetails(identity as number, true)
  }
  root.classList.remove('hidden')
}