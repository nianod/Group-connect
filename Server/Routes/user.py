from fastapi import Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
import os
from dotenv import load_dotenv
from Database.Users.db import users_collection

load_dotenv()

router = APIRouter(tags=["user"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = "HS256"

@router.get("/profile")
def get_profile(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("email")
        if email is None:
            raise HTTPException(status_code=400, detail="Invalid token payload")
        user = users_collection.find_one({"email": email})

        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return {"user": {"name": user["name"], "email": user["email"]}}
    except JWTError:
        raise HTTPException(status_code=400, detail="Invalid token")
