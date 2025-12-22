import { createDatabaseTable } from './database/schema'
import './api/'
import { fatal } from '@trippler/tr_lib/server'

setImmediate(async () => {
  const success = await createDatabaseTable()
  if (!success) fatal('Failed to create database table')
})