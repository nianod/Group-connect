import jwt
from datetime import datetime, timedelta
import os

JWT_SECRET = os.getenv("JWT_SECRET_KEY")
algorithm="HS256"

def access_token(data: dict, expires_delta: timedelta = timedelta(hours=1)):
    to_encode = data.copy()
    to_encode.update({"exp": datetime.utcnow() + expires_delta})
    token = jwt.encode(to_encode, JWT_SECRET, algorithm)
    return token