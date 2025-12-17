import DOMContentLoaded from '..'

RegisterNuiCallback('DOMContentLoaded', (_data: any, callback: Function) => {
  DOMContentLoaded(true)
  callback({})
})