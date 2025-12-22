import DOMContentLoaded from '..'
import { onNuiCallback } from '@trippler/tr_lib/client'

onNuiCallback('DOMContentLoaded', (_data, callback) => {
  DOMContentLoaded(true)
  callback({})
})