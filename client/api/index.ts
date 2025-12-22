import { onPromise, triggerNuiCallback } from "@trippler/tr_lib/client"
import { PlayerObject } from "../../shared/constants/config"

onPromise('createNewMessage', async (message: string, userRole: PlayerObject) => {
  triggerNuiCallback({
    action: 'createNewMessage',
    message,
    userRole,
  })
})