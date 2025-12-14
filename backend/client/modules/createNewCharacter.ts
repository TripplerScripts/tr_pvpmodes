import showGame from "./showGame"
import hideGame from "./hideGame"

exports('showGame', showGame)
exports('hideGame', hideGame)

export default async () => { 
  exports.tr_spawn.startCharacterProcess(null, null, hideGame, showGame)
}