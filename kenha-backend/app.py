from flask import Flask, render_template, jsonify, request
from flask_migrate import Migrate
# from forms import RegistrationForm, LoginForm
from models import db, User, Project, Service, Contact
from flask_cors import CORS
from flask_session import Session


app = Flask(__name__, static_folder='../kenha-frontend/dist', template_folder='../kenha-frontend/dist', static_url_path='')
app.config['SECRET_KEY'] = 'teejuma99' 
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kenha.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


migrate = Migrate(app, db)
db.init_app(app)
CORS(app)
@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user:
            return 'Email already registered. Please log in.'
        user = User(full_name=form.full_name.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return 'Registration successful!'
    return render_template('register.html', title='Register', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            return 'Login successful!'
        else:
            return 'Invalid email or password'
    return render_template('login.html', title='Login', form=form)

# # Create a new project
# @app.route('/projects', methods=['POST'])
# def create_project():
#     data = request.get_json()
#     title = data.get('title')
#     description = data.get('description')
#     project = Project(title=title, description=description)
#     db.session.add(project)
#     db.session.commit()
#     return jsonify(project.serialize()), 201

# Retrieve a list of all projects
@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([project.serialize() for project in projects])

from datetime import datetime

# Create a new project
@app.route('/projects', methods=['POST'])
def create_project():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    author_id = data.get('author_id')  
    created_at = datetime.utcnow()  

    project = Project(title=title, description=description, author_id=author_id, created_at=created_at)
    db.session.add(project)
    db.session.commit()
    return jsonify(project.serialize()), 201


# @app.route('/projects', methods=['GET'])
# def get_projects():
#     projects = Project.query.all()
#     return jsonify([project.serialize() for project in projects])


# Update a project
@app.route('/update_project/<int:id>', methods=['PUT'])
def update_project(id):
    project = Project.query.get(id)
    if not project:
        return jsonify({'message': 'Project not found'}), 404

    data = request.get_json()
    project.title = data.get('title', project.title)
    project.description = data.get('description', project.description)
    db.session.commit()
    return jsonify(project.serialize())

# Delete a project
@app.route('/delete_project/<int:id>', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get(id)
    if project:
        db.session.delete(project)
        db.session.commit()
        return jsonify({'message': 'Project deleted'})
    else:
        return jsonify({'message': 'Project not found'}), 404

# Create a new service
@app.route('/create_service', methods=['POST'])
def create_service():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    service = Service(title=title, description=description)
    db.session.add(service)
    db.session.commit()
    return jsonify(service.serialize()), 201

# Retrieve a list of all services
@app.route('/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([service.serialize() for service in services])

# Update a service
@app.route('/update_service/<int:id>', methods=['PUT'])
def update_service(id):
    service = Service.query.get(id)
    if not service:
        return jsonify({'message': 'Service not found'}), 404

    data = request.get_json()
    service.title = data.get('title', service.title)
    service.description = data.get('description', service.description)
    db.session.commit()
    return jsonify(service.serialize())

# Delete a service
@app.route('/delete_service/<int:id>', methods=['DELETE'])
def delete_service(id):
    service = Service.query.get(id)
    if service:
        db.session.delete(service)
        db.session.commit()
        return jsonify({'message': 'Service deleted'})
    else:
        return jsonify({'message': 'Service not found'}), 404

# 

# Create a new contact
@app.route('/contacts', methods=['POST'])
def create_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    author_id = data.get('author_id')  
    project_id = data.get('project_id')  

    contact = Contact(name=name, email=email, message=message, author_id=author_id, project_id=project_id)
    db.session.add(contact)
    db.session.commit()
    return jsonify(contact.serialize()), 201





# Retrieve a list of all contacts
@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([contact.serialize() for contact in contacts])

# @app.route('/contacts', methods=['GET', 'POST'])
# def manage_contacts():
#     if request.method == 'GET':
#         contacts = Contact.query.all()
#         return jsonify([contact.serialize() for contact in contacts])
#     elif request.method == 'POST':
#         data = request.get_json()
#         name = data.get('@appname')
#         email = data.get('email')
#         message = data.get('message')  
#         contact = Contact(name=name, email=email, message=message)
#         db.session.add(contact)
#         db.session.commit()
#         return jsonify(contact.serialize()), 201


# Update a contact
@app.route('/update_contact/<int:id>', methods=['PUT'])
def update_contact(id):
    contact = Contact.query.get(id)
    if not contact:
        return jsonify({'message': 'Contact not found'}), 404

    data = request.get_json()
    contact.name = data.get('name', contact.name)
    contact.email = data.get('email', contact.email)
    contact.message = data.get('message', contact.message)  
    db.session.commit()
    return jsonify(contact.serialize())

# Delete a contact
@app.route('/delete_contact/<int:id>', methods=['DELETE'])
def delete_contact(id):
    contact = Contact.query.get(id)
    if contact:
        db.session.delete(contact)
        db.session.commit()
        return jsonify({'message': 'Contact deleted'})
    else:
        return jsonify({'message': 'Contact not found'}), 404


@app.route('/logout')
def logout():
    session.clear()
    return 'Logged out successfully'


if __name__ == '__main__':
    app.run(debug=True)