from flask import Flask, request, jsonify
from flask_cors import CORS

import json

from models.fetchUsers import fetchUsers, getUserById
from models.createNewUser import createUser
from models.passwords import fetch_last_password, createPassword, fetchPasswords

from utils.generate_password import generatePassword
from utils.reorder_queue_by_priority import organizeQueue

from lib.json import createJson, readJson

app = Flask(__name__)
CORS(app)

@app.route('/api/users')
def fetch_users():
  return fetchUsers()

@app.route('/api/users/add', methods=["POST"])
def create_user():
  userData = request.json

  cpf = userData["cpf"]
  date_birthday = userData["date_birthday"]
  name = userData["name"]
  is_especial = userData["is_especial"]
  deficiency = userData.get("deficiency", " ")
  isCreatedUser = createUser(name, cpf, date_birthday, is_especial, deficiency)

  if(isCreatedUser):
    return jsonify({ 'message': 'Usuário cadastrado com sucesso!' }), 201
  else:
    return jsonify({ 'message': 'Não foi possível cadastrar o usuário' }), 400
  
@app.route('/api/users/<int:userId>', methods=["GET"])
def search_user(userId):
  user = getUserById(userId)[0]
  if(user):
    user_id = user[0]
    name = user[1]
    cpf = user[2]
    date_birthday = user[3]
    is_especial = user[4]
    deficiency = user[5]
    return jsonify({ 'id': user_id, 'name': name, 'cpf': cpf, 'date_birthday': date_birthday, 'is_especial': is_especial, 'deficiency': deficiency })
  else:
    return jsonify({ 'message': "Usuário não encontrado" }), 404

@app.route('/api/passwords/create', methods=["POST"])
def create_password():
  passwordData = request.json

  userId = passwordData["user_id"]
  isPriority = passwordData.get("is_priority")
  urgencyLevel = (passwordData["urgency_level"]).upper()

  isHaveLastPassword = fetch_last_password(urgencyLevel, isPriority)
  order = 1
  if(isHaveLastPassword):
    order = isHaveLastPassword["order"] + 1

  password = generatePassword(callOrder=order, isPriority=isPriority, levelUrgency=urgencyLevel)
  unformatedPassword = password['password']
  last_inserted_id = createPassword(order, isPriority, urgencyLevel, userId, unformatedPassword)
  order = 1
  if(last_inserted_id):
    lastPasswords = fetchPasswords()
    lastJson = readJson()
    oldQueue = [unformatedPassword]

    if(len(lastPasswords) > 0):
      for item in lastPasswords:
        oldQueue.append(item["unformatedPassword"])

    reorderedQueue = organizeQueue(oldQueue)
    data = {
      'boxes': lastJson['boxes'],
      'queue': [*reorderedQueue]
    }

    print(data)

    dataJson = json.dumps(data)
    createJson(data=dataJson)
    return jsonify({ 'id': last_inserted_id, 'password': password["formatedPassword"] }), 201
  return jsonify({ 'message': "Não foi possível cadastrar uma nova senha" }), 400

@app.route('/get_numbers', methods=['GET'])
def get_numbers():

  response_data = {
      'appointment_number': "NN0001",
      'reception_number': "2"
  }
  return jsonify(response_data)
  
if __name__ == "__main__":
  app.run(debug=True)
