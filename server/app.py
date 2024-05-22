from flask import Flask, jsonify  
from flask_cors import CORS

# importei jsonify para o teste :)

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return "Hello World"


#teste: BATATA

@app.route('/get_numbers', methods=['GET'])

# TESTE - BATATA_0001 (°O°)
# A função  get_Numbers() retorna os números de chamada e recepção atuais em formato JSON.
# Retorna:
#     Um objeto JSON com as chaves 'appointment_number' e 'reception_number'
#     'appointment_number' representa o número atual da chamada(NN0001)
#     'reception_number' representa o número atual da recepção(2)
# 
# Os dados serão tratados em dataExchange.js e apresentados .-.
# Obs.: A parte de ultimas chamadas não foi feita ainda e o código do js foi imporvisado, aceito sugestões de melhorias!

def get_numbers():
  response_data = {
      'appointment_number': "NN0001",
      'reception_number': "2"
  }
  return jsonify(response_data)

if __name__ == "__main__":
  app.run(debug=True)