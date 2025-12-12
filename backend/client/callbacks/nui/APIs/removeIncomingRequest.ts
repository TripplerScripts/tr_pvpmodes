import lib from '../../../lib'

export default (timeout: number, name: string) => lib.callback.await('removeIncomingRequest', timeout, name)