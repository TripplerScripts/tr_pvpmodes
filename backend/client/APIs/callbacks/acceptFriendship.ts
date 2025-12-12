import lib from '../../lib'

export default (timeout: number, name: string) => lib.callback.await('acceptFriendship', timeout, name)