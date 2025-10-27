import jwt
from datetime import datetime, timedelta
import os
import bcrypt

JWT_SECRET = os.getenv("JWT_SECRET_KEY")
algorithm="HS256"

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = hashpw(password.emcode('utf-8'), salt)
    return hashed.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> boo:
    return bcrypt.checkpw(plain_password('utf-8'), hashed_password('utf-8'))

def access_token(data: dict, expires_delta: timedelta = timedelta(hours=1)):
    to_encode = data.copy()
    to_encode.update({"exp": datetime.utcnow() + expires_delta})
    token = jwt.encode(to_encode, JWT_SECRET, algorithm)
    return token