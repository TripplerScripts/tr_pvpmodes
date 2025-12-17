import { sendCallback } from "@lenixdev/ui_components"
import useMainIntrance from "./useMainIntrance"

export default async (mode: string) => {
  const response = await sendCallback<boolean>('selectMode', mode)
  if (response) {
    useMainIntrance(false)
  }
}