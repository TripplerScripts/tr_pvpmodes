import { nuiFocus } from "@trippler/tr_lib/web"
import { triggerNuiCallback } from "@trippler/tr_lib/web"

export const toggleMenu = (state: boolean) => {
  nuiFocus(state, state)
  const menu = document.getElementById('main-menu')?.classList
  state ? menu?.remove('hidden') : menu?.add('hidden')
}

export const selectMode = async (mode: string) => {
  triggerNuiCallback<boolean>('selectMode', { mode })
}