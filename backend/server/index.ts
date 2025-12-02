const lib = exports.tr_lib.init()
let waitingRoom = []

const homeLocation = [-353.7528, -822.3127, 31.5012, 0.9013]
const awayLocation = [-343.9194, -706.1902, 32.6280, 284.1532]

const shutDownDashboard = (source: number) => {
  emitNet('tr_competitive:client:shutDownDashboard', source)
}

const startNewSession = (homePlayer: string, awayPlayer: string) => {
  SetEntityCoords(GetPlayerPed(homePlayer), homeLocation[0], homeLocation[1], homeLocation[2], true, false, true, false)
  SetEntityCoords(GetPlayerPed(awayPlayer), awayLocation[0], awayLocation[1], awayLocation[2], true, false, true, false)
  SetEntityHeading(GetPlayerPed(homePlayer), homeLocation[3])
  SetEntityHeading(GetPlayerPed(awayPlayer), awayLocation[3])
}

const createTheDatabase = async () => {
  const success = await exports.oxmysql.query_async(
    `
      CREATE TABLE IF NOT EXISTS tr_competitive_users (
        userId int UNSIGNED NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        license varchar(255) NOT NULL,
        PRIMARY KEY (userId)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `
  )
  if (!success) return false
  return true
}

const createUserIntoTheDatabase = async (license: string, name: string) => {
  const user = await exports.oxmysql.single_async('SELECT `userId` FROM `users` WHERE `license` = ? LIMIT 1', [
    license
  ])
  if (!user && !user.user.userId) return false;
  console.log(name)

  const id = await exports.oxmysql.insert_async('INSERT INTO `tr_competitive_users` (userId, name, license) VALUES (?, ?, ?)', [
    user.userId, name, license
  ])
  if (!id) return false

  return true
}

const doesUserAlreadyExist = async (source: string) => {
  const tableCreated = await createTheDatabase()
  if (!tableCreated) return false

  const license = GetPlayerIdentifierByType(source, 'license')
  const user = await exports.oxmysql.single_async('SELECT `userId` FROM `tr_competitive_users` WHERE `license` = ? LIMIT 1', [
    license
  ])
  if (!user) return false

  return true
}

lib.callback.register('doesUserAlreadyExist', (source: string) => {
  return doesUserAlreadyExist(source)
})

lib.callback.register('createUser', async (source: string, name: string) => {
  const license = GetPlayerIdentifierByType(source, 'license')
  return await createUserIntoTheDatabase(license, name)
})

onNet('tr_competitive:server:startMatchmaking', () => {
  console.log(`[TR_COMPETITIVE] ${source} joined the waiting room.`)
  waitingRoom.push(source)
})

onNet('tr_competitive:server:stopMatchmaking', () => {
  console.log(`[TR_COMPETITIVE] ${source} left the waiting room.`)
  waitingRoom = waitingRoom.filter(player => player !== source) 
})

setInterval(() => {
  if (waitingRoom.length >= 2) {
    console.log('[TR_COMPETITIVE] Starting new session... for ', waitingRoom[0], 'and', waitingRoom[1])
    startNewSession(waitingRoom[0], waitingRoom[1])
    shutDownDashboard(waitingRoom[0])
    shutDownDashboard(waitingRoom[1])
    waitingRoom = waitingRoom.filter(player => player !== waitingRoom[0] && player !== waitingRoom[1])
  }
}, 5000)