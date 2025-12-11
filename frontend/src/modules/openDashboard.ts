import initOnBoarding from './onBoard'
import createUser from '../APIs/createUser'

export default async (identity: number): Promise<void> => {
  const root = document.getElementById('root')
  if (!identity) {
    const { userName, userAvatar } = await initOnBoarding()
    createUser(userName, userAvatar)
  }
  root.classList.remove('hidden')
}