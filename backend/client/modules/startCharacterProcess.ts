import showGame from "./showGame"
import hideGame from "./hideGame"

exports('showGame', showGame)
exports('hideGame', hideGame)

export default async () => exports.tr_spawn.startCharacterProcess([476.8345, -1314.8319, 28.2045, 239.2849], [476.8345, -1314.8319, 28.2045, 239.2849], hideGame, showGame)