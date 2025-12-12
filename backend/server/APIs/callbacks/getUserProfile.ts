import lib from '../../lib'
import { getSingleRow } from "../../database";

const callback = async (identity: number) => {
  const response = await getSingleRow('name, avatar', 'tr_competitive_users', 'identity = ?', identity)
  return response && { ...response }
}

export default () => lib.callback.register('getUserProfile', async (_source: string, identity: number) => callback(identity))
export type GetUserProfile = ReturnType<typeof callback>