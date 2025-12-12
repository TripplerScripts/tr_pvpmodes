import lib from '../../../lib'

export default (timeout: number, name: string) => lib.callback.await('cancelOutgoingFriendship', timeout, name)