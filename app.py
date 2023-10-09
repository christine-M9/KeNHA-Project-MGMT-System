from flask import Flask
from app import app


app = Flask(__name__, static_folder='../kenha-frontend/dist', template_folder='../kenha-frontend/dist', static_url_path='')

if __name__ == '__main__':
    app.run(debug=True)