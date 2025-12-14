on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    exports.qbx_core.Logout(-1)
  }
})