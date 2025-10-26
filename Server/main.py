from fastapi import FastAPI
from Database.Users.db import users_collection
from Auth.Services.authService import access_token


app = FastAPI()

@app.get('/')
async def landind():
    return {"Message" : "Hello user"}

    #==============#
    # Testing...   #
    #==============#
@app.get("/test")
async def test():
    count = users_collection.count_documents({})
    return{"Message": f"Successfully connected to mong{count}"}


@app.post('/Signup')
async def Register(user: dict):

    existing_user = users_collection.find_one({'email': user["email"]})

    if existing_user:
        return{"error": "User already exists"}
    
    users_collection.insert_one(user)
    token = access_token({"email": user["email"]})
    return{"message": "User registerede successfully", "token": token}