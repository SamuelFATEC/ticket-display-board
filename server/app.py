from flask import Flask, request, jsonify
from flask_cors import CORS

from models.fetchUsers import fetchUsers
from models.createNewUser import createUser

from db import connectDatabase

database = connectDatabase()

app = Flask(__name__)
CORS(app)

@app.route('/api/users')
def fetch_users():
  return fetchUsers()

@app.route('/api/users/add', methods=["POST"])
def create_user():
  userData = request.json

  print(userData)

  cpf = userData["cpf"]
  date_birthday = userData["date_birthday"]
  name = userData["name"]
  rg = userData["rg"]
  isCreatedUser = createUser(name=name, cpf=cpf, rg=rg, date_birthday=date_birthday)

  if(isCreatedUser):
    return jsonify({ 'message': 'Usuário cadastrado com sucesso!' }), 201
  else:
    return jsonify({ 'message': 'Não foi possível cadastrar o usuário' }), 400

@app.route('/get_numbers', methods=['GET'])

def get_numbers():
  response_data = {
      'appointment_number': "NN0001",
      'reception_number': "2"
  }
  return jsonify(response_data)

if __name__ == "__main__":
  app.run(debug=True)