import lib from '../../lib'

export default (timeout: number | undefined, name: string, avatar: string) => lib.callback.await('createUser', timeout, name, avatar)