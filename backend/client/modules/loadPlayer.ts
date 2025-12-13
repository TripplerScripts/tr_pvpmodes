import createPlayer from './createPlayer'

export default async () => {
  const characters = await exports.tr_spawn.charactersData()
  if (characters.length > 0) {
    const isLoaded = await exports.tr_spawn.loadPlayer(characters[0].citizenid)
    if (isLoaded) {
      exports.tr_spawn.spawnPlayer()
    }
  } else {
    createPlayer()
  }
}