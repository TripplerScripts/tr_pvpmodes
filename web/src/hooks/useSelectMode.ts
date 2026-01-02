import { nuiFocus, triggerNuiCallback } from "@trippler/tr_lib/web"
import useMenu from "./useMenu"

export default async (mode: string) => {
  nuiFocus(false, false)
  const response = await triggerNuiCallback<boolean>('selectMode', { mode })
  if (response) {
    useMenu(false)
  }
}