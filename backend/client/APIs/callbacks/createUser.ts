import lib from '../../lib'

export default (timeout: number, name: string, avatar: string) => lib.callback.await('createUser', timeout, name, avatar)