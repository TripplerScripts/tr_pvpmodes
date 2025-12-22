import { triggerNuiCallback } from "@trippler/tr_lib/web"
import useMainIntrance from "./useMainIntrance"

export default async (mode: string) => {
  const response = await triggerNuiCallback<boolean>('selectMode', { mode })
  if (response) {
    useMainIntrance(false)
  }
}