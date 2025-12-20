import { createDatabaseTable } from './database/schema'
import './api/'

setImmediate(async () => {
  const success = await createDatabaseTable()
  if (!success) console.error('Failed to create database table')
})