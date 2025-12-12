import lib from '../../lib'
import { CancelOutgoingFriendship } from '../../../server/APIs/callbacks/cancelOutgoingFriendship'

export default (timeout: number | undefined, name: string) => lib.callback.await<CancelOutgoingFriendship>('cancelOutgoingFriendship', timeout, name)