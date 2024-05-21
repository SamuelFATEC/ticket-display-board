from db import connectDatabase

database = connectDatabase()

def fetchUsers():
  databaseCursor= database.cursor()
  databaseCursor.execute('SELECT * FROM users')

  users_list = databaseCursor.fetchall()
  users = list()
  for item in users_list:
    users.append(
      {
        'id': item[0],
        'name': item[1],
        'cpf': item[2],
        'rg': item[3],
        'date_birthday': item[4],
        'is_especial': item[5],
        'deficiency': item[6]
      }
    )
  return users