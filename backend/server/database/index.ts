type SQLValue = string | number | boolean | null

export const createDatabaseTable = async () => await exports.oxmysql.query_async(
  `
    CREATE TABLE IF NOT EXISTS tr_competitive_users (
      identity int UNSIGNED NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      avatar varchar(255) NOT NULL,
      friends JSON NOT NULL DEFAULT ('[]'),
      incomingInvitations JSON NOT NULL DEFAULT ('[]'),
      outgoingInvitations JSON NOT NULL DEFAULT ('[]'),
      license varchar(255) NOT NULL,
      PRIMARY KEY (identity)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `
)

export const getSingleRow = async (columns: string, table: string, conditions?: string, ...values: SQLValue[]) => await exports.oxmysql.single_async(
  `SELECT ${columns} FROM ${table}${conditions ? ` WHERE ${conditions}` : ''}`
, values)

export const getSingleColumn = async (column: string, table: string, conditions?: string, ...values: SQLValue[]) => await exports.oxmysql.executeSync(
  `SELECT ${column} FROM ${table}${conditions ? ` WHERE ${conditions}` : ''}`
, values)

export const updateRow = async (table: string, column: string, conditions?: string, ...values: SQLValue[]) => await exports.oxmysql.update_async(
  `UPDATE ${table} SET ${column}${conditions ? ` WHERE ${conditions}` : ''}`
, values)

export const insertNewRow = async (table: string, columns: string, placeholders: string, ...values: SQLValue[]) => await exports.oxmysql.insert_async(
  `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`
, values)