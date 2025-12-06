import { createDatabaseTable } from './database'

setImmediate(async () => {
  const success = await createDatabaseTable()
  if (!success) console.error('Failed to create database table')
})