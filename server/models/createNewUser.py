from models.db import connectDatabase

database = connectDatabase()

def createUser(name, cpf, date_birthday, is_especial, deficiency):
  cursor = database.cursor()
  query = f"INSERT INTO `users` (`id`, `name`, `cpf`, `date_birthday`, `is_especial`, `deficiency`) VALUES (NULL, '{name}', '{cpf}', '{date_birthday}', '{is_especial}', '{deficiency}');"
  try:
    cursor.execute(query)
    database.commit()
    return True
  except:
    return False