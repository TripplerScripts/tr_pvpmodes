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

export const getSingleRow = (columns: string[], table: string, condition: string, ...values: any[]) => exports.oxmysql.single_async(
  `SELECT ${columns.join(', ')} FROM ${table} WHERE ${condition} = ? LIMIT 1`
, values)

export const getSingleColumn = (column: string, table: string) => exports.oxmysql.executeSync(
  `SELECT ${column} FROM ${table}`
)

export const updateSingleColumn = (table: string, column: string, condition: string, ...values: any[]) => exports.oxmysql.update_async(
  `UPDATE ${table} SET ${column} = ? WHERE ${condition} = ?`
, values)

export const insertNewRow = (table: string, columns: string[], ...values: any[]) => exports.oxmysql.insert_async(
  `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.map(() => '?').join(', ')})`
, values)