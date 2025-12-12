import lib from '../../lib'
import { GetFriendablePlayers } from '../../../server/APIs/callbacks/getFriendablePlayers'

export default (timeout?: number) => lib.callback.await<GetFriendablePlayers>('getFriendablePlayers', timeout)