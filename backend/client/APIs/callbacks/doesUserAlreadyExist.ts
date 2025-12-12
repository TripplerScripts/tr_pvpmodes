import lib from '../../lib'
import { DoesUserAlreadyExist } from '../../../server/APIs/callbacks/doesUserAlreadyExist'

export default (timeout?: number) => lib.callback.await<DoesUserAlreadyExist>('doesUserAlreadyExist', timeout)