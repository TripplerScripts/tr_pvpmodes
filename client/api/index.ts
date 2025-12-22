import { onPromise, triggerNuiCallback } from "@trippler/tr_lib/client"
import { PlayerObject } from "../../shared/constants"

onPromise('createNewMessage', async (message: string, userRole: PlayerObject) => {
  triggerNuiCallback({
    action: 'createNewMessage',
    message,
    userRole,
  })
})