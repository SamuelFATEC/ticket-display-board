from db import connectDatabase

database = connectDatabase()

def createUser(name, cpf, rg, date_birthday):
  cursor = database.cursor()
  query = f"INSERT INTO `users` (`id`, `name`, `cpf`, `rg`, `date_birthday`) VALUES (NULL, '{name}', '{cpf}', '{rg}', '{date_birthday}');"
  try:
    cursor.execute(query)
    database.commit()
    return True
  except:
    return False