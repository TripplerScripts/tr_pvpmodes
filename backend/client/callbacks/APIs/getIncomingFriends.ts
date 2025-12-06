import lib from '../../lib'

export default (timeout?: number) => lib.callback.await('getIncomingFriends', timeout)