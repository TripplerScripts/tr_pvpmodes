import { modulesEnabled } from '../../shared/constants'

if (modulesEnabled.chat) {
  import('./elements/chat').then(() => {
    import('./api/chat')
  }).then(() => {
    import('./dom/chat')
    import('./dom/dashboard')
  })
}