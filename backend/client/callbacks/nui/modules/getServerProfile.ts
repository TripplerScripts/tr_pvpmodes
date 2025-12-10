export default (): void => RegisterNuiCallback('getServerProfile', async (_data: Array<any>, callback: (response: any) => void) => {
  const name = 'Trippler Scripts'
  const avatar = 'https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png'
  callback({ name, avatar })
})