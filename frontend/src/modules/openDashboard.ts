import initOnBoarding from './onBoard'
import createUser from '../APIs/createUser'

export default async (exist: boolean): Promise<void> => {
  const root = document.getElementById('root')
  if (root && !exist) {
    const { userName, userAvatar } = await initOnBoarding()
    createUser(userName, userAvatar)
  }
  root.classList.remove('hidden')
}