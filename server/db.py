import mysql.connector

def connectDatabase():
  return mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='painel_database'
  )