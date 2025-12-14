import lib from '../../lib'
import { RemoveIncomingRequest } from '../../../server/APIs/callbacks/removeIncomingRequest'

export default (timeout: number | undefined, name: string) => lib.callback.await<RemoveIncomingRequest>('removeIncomingRequest', timeout, name)