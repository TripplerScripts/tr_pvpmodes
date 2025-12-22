import DOMContentLoaded from '..'
import { onNuiCallback } from '@trippler/tr_lib/client'

onNuiCallback<null>('DOMContentLoaded', (_data, callback) => {
  DOMContentLoaded(true)
  callback(true)
})