from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
import random, hashlib

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eventflow.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    role = db.Column(db.String(20), nullable=False)  # attendee or organizer

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    description = db.Column(db.Text)
    date = db.Column(db.DateTime)
    organizer_id = db.Column(db.Integer)

class Registration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    event_id = db.Column(db.Integer)
    attended = db.Column(db.Boolean, default=False)

class AuditLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    action = db.Column(db.String(255))
    user_email = db.Column(db.String(120))
    organizer_id = db.Column(db.Integer)

@app.route('/register_user', methods=['POST'])
def register_user():
    data = request.get_json()
    hashed_pw = hashlib.sha256(data['password'].encode()).hexdigest()
    user = User(email=data['email'], password=hashed_pw, role=data.get('role', 'attendee'))
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered"}), 201

@app.route('/create_event', methods=['POST'])
def create_event():
    data = request.get_json()
    event = Event(
        title=data['title'],
        description=data['description'],
        date=datetime.strptime(data['date'], '%Y-%m-%d'),
        organizer_id=data['organizer_id']
    )
    db.session.add(event)
    db.session.commit()
    return jsonify({"message": "Event created"}), 201

@app.route('/get_engagement/<int:event_id>', methods=['GET'])
def get_engagement(event_id):
    registrations = Registration.query.filter_by(event_id=event_id).all()
    total = len(registrations)
    attended = sum(1 for r in registrations if r.attended)
    feedback_score = random.choice([0, 1])
    responsiveness = random.choice([0, 1])
    score = min(2, total//5) + min(2, attended//5) + feedback_score + responsiveness
    return jsonify({"engagement_score": score})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
    