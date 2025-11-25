let waitingRoom = []

const homeLocation = [0, 0, 0, 0]
const awayLocation = []

const shutDownDashboard = () => {
  emitNet('tr_competitive:client:shutDownDashboard')
}

const startNewSession = (homePlayer: string, awayPlayer: string) => {
  shutDownDashboard()
  SetEntityCoords(GetPlayerPed(homePlayer), homeLocation[0], homeLocation[1], homeLocation[2], true, false, true, false)
  SetEntityCoords(GetPlayerPed(awayPlayer), awayLocation[0], awayLocation[1], awayLocation[2], true, false, true, false)
  SetEntityHeading(GetPlayerPed(homePlayer), homeLocation[3])
  SetEntityHeading(GetPlayerPed(awayPlayer), awayLocation[3])
}

onNet('tr_competitive:server:startMatchmaking', (source: number) => {
  waitingRoom.push(source)
})

setInterval(() => {
  if (waitingRoom.length > 2) {
    startNewSession(waitingRoom[0], waitingRoom[1])
  }
}, 5000)