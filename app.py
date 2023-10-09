from flask import Flask

app = Flask(__name__, static_folder='./kenha-frontend/dist', template_folder='./kenha-frontend/dist', static_url_path='')

if __name__ == '__main__':
    app.run(debug=True)