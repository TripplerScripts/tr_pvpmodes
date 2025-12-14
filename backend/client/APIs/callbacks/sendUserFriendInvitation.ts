import lib from '../../lib'
import { SendUserFriendInvitation } from '../../../server/APIs/callbacks/sendUserFriendInvitation'

export default (timeout: number | undefined, name: string) => lib.callback.await<SendUserFriendInvitation>('sendUserFriendInvitation', timeout, name)