import { modulesEnabled } from '../../shared/constants'

if (modulesEnabled.chat) {
  import('./elements/chat').then(() => {
    import('./api/chat')
  }).then(() => {
    import('./dom/chat')
    import('./dom/spawn')
  })
}

if (modulesEnabled.spawn) {
  import('./api/spawn')
  import('./dom/spawn')
}