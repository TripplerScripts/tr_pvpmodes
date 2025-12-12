import lib from '../../lib'

export default (timeout: number, identity: number) => lib.callback.await('getUserProfile', timeout, identity)