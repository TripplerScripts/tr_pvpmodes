export const createDatabaseTable = async () => {
  const success = await exports.oxmysql.query_async(
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
  return success
}

export const getSingleRow = async (columns: string[], table: string, condition: string, ...values: any[]) => {
  const response = exports.oxmysql.single_async(`SELECT ${columns.join(', ')} FROM ${table} WHERE ${condition} = ? LIMIT 1`, values)
  return response
}

export const getSingleColumn = async (column: string, table: string) => {
  const response = await exports.oxmysql.executeSync(`SELECT ${column} FROM ${table}`)
  return response
}
export const updateSingleColumn = async (table: string, column: string, condition: string, ...values: any[]) => {
  const response = await exports.oxmysql.update_async(`UPDATE ${table} SET ${column} = ? WHERE ${condition} = ?`, values)
  return response
}
export const insertNewRow = async (table: string, columns: string[], ...values: any[]) => {
  const response = await exports.oxmysql.insert_async(`INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.map(() => '?').join(', ')})`, values)
  return response
}