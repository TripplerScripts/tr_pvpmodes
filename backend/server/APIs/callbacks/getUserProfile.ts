import lib from '../../lib'
import { getSingleRow } from "../../database";

export default () => lib.callback.register('getUserProfile', async (_source: string, identity: number) => {
  const response = await getSingleRow('name, avatar', 'tr_competitive_users', 'identity = ?', identity)
  return response && { ...response }
})