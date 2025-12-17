import openMainMenu from '../modules/openMainMenu'

onNet('tr_onboarding/client/logout', () => {
  openMainMenu()
})
on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})