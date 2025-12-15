import { createDatabaseTable } from './database'
import './api/'

setImmediate(async () => {
  const success = await createDatabaseTable()
  if (!success) console.error('Failed to create database table')
})