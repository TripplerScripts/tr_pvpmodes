export default () => RegisterNuiCallback('getServerProfile', async (_data, callback) => {
  const name = 'Trippler Scripts'
  const avatar = 'https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png'
  callback({ name, avatar })
})