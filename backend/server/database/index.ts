type SQLValue = string | number | boolean | null

export const createDatabaseTable = () => exports.oxmysql.query_async(
  `
    CREATE TABLE IF NOT EXISTS tr_competitive_users (
      userId int UNSIGNED NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      license varchar(255) NOT NULL,
      friends varchar(255) DEFAULT '',
      incomingInvitations varchar(255) DEFAULT '',
      outgoingInvitations varchar(255) DEFAULT '',
      PRIMARY KEY (userId)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `
)

export const getSingleRow = (columns: string, table: string, conditions?: string, ...values: SQLValue[]) => exports.oxmysql.single_async(
  `SELECT ${columns} FROM ${table}${conditions ? ` WHERE ${conditions}` : ''}`
, values)

export const getSingleColumn = (column: string, table: string, conditions?: string, ...values: SQLValue[]) => exports.oxmysql.executeSync(
  `SELECT ${column} FROM ${table}${conditions ? ` WHERE ${conditions}` : ''}`
, values)

export const updateRow = (table: string, column: string, conditions?: string, ...values: SQLValue[]) => exports.oxmysql.update_async(
  `UPDATE ${table} SET ${column}${conditions ? ` WHERE ${conditions}` : ''}`
, values)

export const insertNewRow = (table: string, columns: string, placeholders: string, ...values: SQLValue[]) => exports.oxmysql.insert_async(
  `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`
, values)