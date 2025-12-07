import lib from '../../lib'
import getPlayerLicense from "../../utils/getPlayerLicense";
import { getSingleRow } from "../../database";

export default () => lib.callback.register('getUserProfile', (source: string) => getSingleRow('name', 'tr_competitive_users', 'license = ?', getPlayerLicense(source)))