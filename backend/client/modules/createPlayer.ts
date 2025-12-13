export default async () => {
  const data = {
    firstname: 'not specified',
    lastname: 'not specified',
    nationality: 'not specified',
    gender: 'not specified',
    birthdate: 'not specified',
    cid: -1
  }
  exports.tr_spawn.spawnPlayer()
  const isCreated = await exports.tr_spawn.createPlayer(null, data)
  if (isCreated) {
    emit('qb-clothes:client:CreateFirstCharacter')
  }
}