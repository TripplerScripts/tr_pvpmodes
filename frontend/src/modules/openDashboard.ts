import initOnBoarding from './onBoard'
import createUser from '../APIs/createUser'

export default async function openClosedWorldGame(exist: boolean) {
  const root = document.getElementById('root')
  if (root && !exist) {
    const username: string = await initOnBoarding()
    createUser(username)
  }
  root.classList.remove('hidden')
}