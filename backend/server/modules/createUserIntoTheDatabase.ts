import { insertNewRow } from '../database'

export default (license: string, name: string) => insertNewRow(
  'tr_competitive_users',
  'name, license, friends, incomingInvitations, outgoingInvitations',
  '?, ?, ?, ?, ?',
  name,
  license,
  JSON.stringify([]),
  JSON.stringify([]),
  JSON.stringify([])
)