from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash



db = SQLAlchemy()



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    projects = db.relationship('Project', backref='author', lazy=True)
    services = db.relationship('Service', backref='author', lazy=True)
    contacts = db.relationship('Contact', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.full_name}', '{self.email}')"

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def serialize(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'email': self.email,
            
        }



class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    services = db.relationship('Service', secondary='project_service_association', backref='projects', lazy=True)
    contacts = db.relationship('Contact', backref='project', lazy=True)

    def __repr__(self):
        return f"Project('{self.title}', '{self.description}')"

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'author_id': self.author_id,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S') if self.created_at else None,
        }

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Service('{self.title}', '{self.description}')"

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'author_id': self.author_id
        }


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)

    def __repr__(self):
        return f"Contact('{self.name}', '{self.email}', '{self.message}')"

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'message': self.message,
            'author_id': self.author_id,
            'project_id': self.project_id,

        }

# Defining the many-to-many relationship table
project_service_association = db.Table('project_service_association',
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'), primary_key=True),
    db.Column('service_id', db.Integer, db.ForeignKey('service.id'), primary_key=True)
)