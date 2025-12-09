import lib from '../../lib'
import { getSingleRow } from "../../database";

export default () => lib.callback.register('getUserProfile', (_source: string, identity: number) => getSingleRow('name', 'tr_competitive_users', 'identity = ?', identity))