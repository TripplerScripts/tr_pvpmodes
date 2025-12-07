callbacks , db , kit types
handle failure error on ui
- Refactor database: Create separate 'friendships' table instead of storing JSON arrays in VARCHAR (proper relational design with userId, friendId, status columns)
- Add SQL injection protection (whitelist column/table names or use ORM)