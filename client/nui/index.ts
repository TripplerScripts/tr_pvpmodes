import { onNuiCallback, triggerPromise } from "@trippler/tr_lib/client"

onNuiCallback<null>("focus", (_data, callback) => {
  SetNuiFocus(true, true)
  callback({})
})

onNuiCallback<{ message: string }>("createNewMessageRequest", async (data, callback) => {
  const response = await triggerPromise("createNewMessageRequest", null, data.message)  
  callback({response})
})

onNuiCallback("closeChat", (_data: [string], callback: Function) => {
  SetNuiFocus(false, false)
  callback({})
})