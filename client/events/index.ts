import openMainMenu from '../modules/openMainMenu'

onNet('tr_spawn/client/logout', () => {
  openMainMenu()
})
on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_spawn/server/logout')
  }
})