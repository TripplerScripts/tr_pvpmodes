import initOnBoarding from '../modules/onBoard'
import createUser from '../modules/createUser'
import { resourceName } from '../index'

const div = document.createElement("div")
div.id = 'root'
div.className = 'select-none hidden'
document.body.appendChild(div)

export default async function openDashboard(exist: boolean) {
  if (div && !exist) {
    const username: string = await initOnBoarding()
    createUser(resourceName, username)
  }
  div.classList.remove('hidden')
}