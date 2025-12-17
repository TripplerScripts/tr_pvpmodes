import { doesUserAlreadyExist } from './api/user' 
import { showGame, hideGame } from './game'

globalThis.exports('doesUserAlreadyExist', doesUserAlreadyExist)
globalThis.exports('showGame', showGame)
globalThis.exports('hideGame', hideGame)