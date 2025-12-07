import { getSingleRow } from '../database'
import getPlayerLicense from '../utils/getPlayerLicense'

export default (source: string) => getSingleRow('userId', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))