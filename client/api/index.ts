RegisterNuiCallback('getDiscordUserRole', async (data: any[], callback: Function) => {
  const response = await lib.callback.await('getDiscordUserRole', null, data[0])
  callback({response})
})