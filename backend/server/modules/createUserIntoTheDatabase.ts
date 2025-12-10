import { insertNewRow } from '../database'

export default (license: string, name: string, avatar: string) => insertNewRow(
  'tr_competitive_users',
  'license, name, avatar, friends, incomingInvitations, outgoingInvitations',
  '?, ?, ?, ?, ?, ?',
  license,
  name,
  avatar,
  JSON.stringify([]),
  JSON.stringify([]),
  JSON.stringify([])
)