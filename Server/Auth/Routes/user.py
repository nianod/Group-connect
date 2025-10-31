from fastapi import APIRouter, HTTPException, Header
from Database.Users.db import users_collection
from Auth.Services.authService import access_token

router = APIRouter()

@router.get("/me")
async def get_current_user(authorization: str = Header(...)):
    """
    Fetch the current user's details based on the Bearer token
    """
    try:
        token = authorization.split(" ")[1]  # Extract token from "Bearer <token>"
        payload = access_token.verify(token)  # adjust based on your token verification
        email = payload.get("email")

        if not email:
            raise HTTPException(status_code=401, detail="Invalid token")

        user = users_collection.find_one({"email": email}, {"password": 0})  # exclude password
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        return user
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))
