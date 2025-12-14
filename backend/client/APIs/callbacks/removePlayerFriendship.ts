import lib from '../../lib'
import { RemovePlayerFriendship } from '../../../server/APIs/callbacks/removePlayerFriendship'

export default (timeout: number | undefined, name: string) => lib.callback.await<RemovePlayerFriendship>('removePlayerFriendship', timeout, name)