import { fatal } from '@trippler/tr_lib/server'
import './api'

import { fatal, info, trace } from '@trippler/tr_lib/shared'

setTimeout(() => {
  if (GetResourceState('chat') !== 'missing') {
    info("the resource 'chat' was detected, stopping 'chat'...")
    ExecuteCommand('stop chat')
  }
})