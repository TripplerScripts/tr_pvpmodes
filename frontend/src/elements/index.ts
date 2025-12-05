import initOnBoarding from '../modules/onBoard'
import createUser from '../modules/createUser'

const root = document.createElement("div")
root.id = 'root'
root.className = 'select-none hidden bg-stone-900/70'
document.body.appendChild(root)

export default async function openDashboard(exist: boolean) {

  if (root && !exist) {
    const username: string = await initOnBoarding()
    createUser(username)
  }
  root.classList.remove('hidden')
}