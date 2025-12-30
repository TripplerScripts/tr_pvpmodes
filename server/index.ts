import { info } from '@trippler/tr_lib/shared'
import './api'

setTimeout(() => {
  if (GetResourceState('chat') !== 'missing') {
    info("the resource 'chat' was detected, stopping 'chat'...")
    ExecuteCommand('stop chat')
  }
})