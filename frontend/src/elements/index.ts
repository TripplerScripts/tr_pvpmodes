import initOnBoarding from '../modules/onBoard'
import createUser from '../modules/createUser'
import { resourceName } from '../index'

let root: HTMLElement; () => {
  root = document.createElement("div")
  root.id = 'root'
  root.className = 'select-none hidden'
  document.body.appendChild(root)
}

export default async function openDashboard(exist: boolean) {
  if (root && !exist) {
    const username: string = await initOnBoarding()
    createUser(resourceName, username)
  }
  root.classList.remove('hidden')
}