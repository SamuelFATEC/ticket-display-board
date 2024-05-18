from flask import Flask
from flask_cors import CORS

from models.fetchUsers import fetchUsers

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  users = fetchUsers()
  return users

if __name__ == "__main__":
  app.run(debug=True)