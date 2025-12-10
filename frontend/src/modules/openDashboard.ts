import initOnBoarding from './onBoard'
import createUser from '../APIs/createUser'

export default async (exist: boolean): Promise<void> => {
  const root = document.getElementById('root')
  if (root && !exist) {
    const { username, avatar } = await initOnBoarding()
    createUser(username, avatar)
  }
  root.classList.remove('hidden')
}