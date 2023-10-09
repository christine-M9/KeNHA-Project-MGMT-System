
from faker import Faker
from models import db, User, Project, Service, Contact
from app import app

fake = Faker()

# Function to generate random user data
def generate_fake_user():
    full_name = fake.name()[:100]  
    email = fake.email()[:100]  
    password = fake.password()
    return User(full_name=full_name, email=email, password=password)

# Function to generate random project data
def generate_fake_project(user):
    return Project(title=fake.sentence(), description=fake.paragraph(), author=user)

# Function to generate random service data
def generate_fake_service(user):
    return Service(title=fake.sentence(), description=fake.paragraph(), author=user)

# Function to generate random contact data
def generate_fake_contact(user, project):
    return Contact(name=fake.name(), email=fake.email(), message=fake.text(), author=user, project=project)

# Create fake users, projects, services, and contacts
def create_fake_data():
    with app.app_context():  
        for _ in range(5):  
            user = generate_fake_user()
            user.set_password('password123')  
            db.session.add(user)
            for _ in range(2):  
                project = generate_fake_project(user)
                service = generate_fake_service(user)
                contact = generate_fake_contact(user, project)
                db.session.add_all([project, service, contact])
        db.session.commit()

if __name__ == '__main__':
    create_fake_data()
