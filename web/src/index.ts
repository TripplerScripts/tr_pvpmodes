import { modulesEnabled } from '../../shared/constants'

if (modulesEnabled.chat) {
  import('./api/chat')
  import('./dom/chat')
  import('./elements/chat')
}