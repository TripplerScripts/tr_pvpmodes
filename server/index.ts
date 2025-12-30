import { info } from '@trippler/tr_lib/shared'
import { modulesEnabled } from '../shared/constants'

if (modulesEnabled.chat) {
  import('./api/chat')
  setTimeout(() => {
    if (GetResourceState('chat') !== 'missing') {
      ExecuteCommand('stop chat')
      if (GetResourceState('chat') !== 'stopped') {
        info("unable to stop the resource 'chat', possibility: no permission to execute commands")
      } else if (GetResourceState('chat') === 'stopped') info("successfully stopped the resource 'chat'")
    }
  })
}