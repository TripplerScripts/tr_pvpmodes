import { createDatabaseTable } from './database'
import prepareAPIs from './APIs'

setImmediate(async () => {
  prepareAPIs()
  const success = await createDatabaseTable()
  if (!success) console.error('Failed to create database table')
})