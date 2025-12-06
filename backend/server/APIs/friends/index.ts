import lib from '../../lib'
import { getSingleRow, getSingleColumn, updateSingleColumn } from '../../database'

lib.callback.register('getFriendablePlayers', async (source: string) => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const senderRow = await getSingleRow(['name', 'friends', 'outgoingInvitations', 'incomingInvitations'], 'tr_competitive_users', 'license', license)
  if (!senderRow) return
  const senderName = senderRow.name
  const senderFriends = JSON.parse(senderRow.friends)
  const senderIncomingRequests = JSON.parse(senderRow.incomingInvitations)
  const senderOutgoingRequests = JSON.parse(senderRow.outgoingInvitations)

  const serverUsers = await getSingleColumn('name', 'tr_competitive_users')
  if (!serverUsers) return

  let filteredPlayers: string[] = []
  serverUsers.forEach((user: { name: string }) => {
    const notSelf = user.name !== senderName
    const notFriend = !senderFriends.includes(user.name)
    const notInIncoming = !senderIncomingRequests.includes(user.name)
    const notInOutgoing = !senderOutgoingRequests.includes(user.name)
    if (notSelf && notFriend && notInIncoming && notInOutgoing) filteredPlayers.push(user.name)
  })
  return filteredPlayers
})

lib.callback.register('sendUserFriendInvitation', async (source: string, name: string) => {
  const senderLicense = GetPlayerIdentifierByType(source, 'license')

  const senderRow = await getSingleRow(['name', 'outgoingInvitations'], 'tr_competitive_users', 'license', [senderLicense])
  if (!senderRow) return
  const receiverRow = await getSingleRow(['incomingInvitations'], 'tr_competitive_users', 'name', name)
  if (!receiverRow) return
  const senderName = senderRow.name
  const senderOutgoingInvitations = JSON.parse(senderRow.outgoingInvitations)
  const receiverIncomingInvitations = JSON.parse(receiverRow.incomingInvitations)

  senderOutgoingInvitations.push(name)
  receiverIncomingInvitations.push(senderName)

  const outgoingUpdated = await updateSingleColumn('tr_competitive_users', 'outgoingInvitations', 'license', JSON.stringify(senderOutgoingInvitations), senderLicense)
  const incomingUpdated = await updateSingleColumn('tr_competitive_users', 'incomingInvitations', 'name', JSON.stringify(receiverIncomingInvitations), name)

  return outgoingUpdated && incomingUpdated
})

lib.callback.register('getPlayerFriends', async (source: string) => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const response = await getSingleRow(['friends'], 'tr_competitive_users', 'license', license)
  return response ? JSON.parse(response.friends) : []
})

lib.callback.register('getIncomingFriends', async (source: string) => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const response = await getSingleRow(['incomingInvitations'], 'tr_competitive_users', 'license', license)
  return response ? JSON.parse(response.incomingInvitations) : []
})

lib.callback.register('getOutgoingFriends', async (source: string) => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const response = await getSingleRow(['outgoingInvitations'], 'tr_competitive_users', 'license', license)
  return response ? JSON.parse(response.outgoingInvitations) : []
})

lib.callback.register('cancelOutgoingFriendship', async (source: string, name: string): Promise<void> => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const senderResponse = await getSingleRow(['name', 'outgoingInvitations'], 'tr_competitive_users', 'license', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow(['incomingInvitations'], 'tr_competitive_users', 'name', name)
  if (!receiverResponse) return

  const senderName = senderResponse.name
  const senderRequests = JSON.parse(senderResponse.outgoingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.incomingInvitations)
  senderRequests.splice(senderRequests.indexOf(name), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderName), 1)

  const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'outgoingInvitations', 'license', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'incomingInvitations', 'name', JSON.stringify(receiverRequests), name)
  return senderAffectedColumn && receiverAffectedColumn
})

lib.callback.register('removeIncomingRequest', async (source: string, name: string): Promise<void> => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const senderResponse = await getSingleRow(['name', 'incomingInvitations'], 'tr_competitive_users', 'license', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow(['outgoingInvitations'], 'tr_competitive_users', 'name', name)
  if (!receiverResponse) return

  const senderName = senderResponse.name
  const senderRequests = JSON.parse(senderResponse.incomingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.outgoingInvitations)
  senderRequests.splice(senderRequests.indexOf(name), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderName), 1)

  const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'incomingInvitations', 'license', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'outgoingInvitations', 'name', JSON.stringify(receiverRequests), name)
  return senderAffectedColumn && receiverAffectedColumn
})

lib.callback.register('acceptFriendship', async (source: string, name: string): Promise<void> => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const senderResponse = await getSingleRow(['name', 'friends'], 'tr_competitive_users', 'license', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow(['friends'], 'tr_competitive_users', 'name', name)
  if (!receiverResponse) return

  const senderName = senderResponse.name
  const senderRequests = JSON.parse(senderResponse.friends)
  const receiverRequests = JSON.parse(receiverResponse.friends)
  senderRequests.push(name)
  receiverRequests.push(senderName)

  const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'friends', 'license', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'friends', 'name', JSON.stringify(receiverRequests), name)
  return senderAffectedColumn && receiverAffectedColumn
})

lib.callback.register('removePlayerFriendship', async (source: string, name: string): Promise<void> => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const senderResponse = await getSingleRow(['name', 'friends'], 'tr_competitive_users', 'license', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow(['friends'], 'tr_competitive_users', 'name', name)
  if (!receiverResponse) return

  const senderName = senderResponse.name
  const senderRequests = JSON.parse(senderResponse.friends)
  const receiverRequests = JSON.parse(receiverResponse.friends)
  senderRequests.splice(senderRequests.indexOf(name), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderName), 1)

  const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'friends', 'license', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'friends', 'name', JSON.stringify(receiverRequests), name)
  return senderAffectedColumn && receiverAffectedColumn
})