import { modulesEnabled } from '../../shared/constants'

if (modulesEnabled.chat) {
  import('./elements/chat')
  import('./api/chat')
  import('./dom/chat')
}