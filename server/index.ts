import { info } from '@trippler/tr_lib/shared'
import { modulesEnabled } from '../shared/constants'

if (modulesEnabled.chat) {
  import('./api/chat')
  setTimeout(() => {
    if (GetResourceState('chat') !== 'missing') {
      info("the resource 'chat' was detected, stopping 'chat'...")
      ExecuteCommand('stop chat')
    }
  })
}