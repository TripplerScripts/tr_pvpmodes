import lib from '../../lib'
import { AcceptFriendship } from '../../../server/APIs/callbacks/acceptFriendship'     

export default (timeout: number | undefined, name: string) => lib.callback.await<AcceptFriendship>('acceptFriendship', timeout, name)