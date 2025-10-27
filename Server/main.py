from fastapi import FastAPI

app = FastAPI()

try:
    from Database.Users.db import users_collection
    print("Database import successful")
except ImportError as e:
    print(f"Database import failed: {e}")

try:
    from Auth.Services.authService import access_token
    print("Auth import successful")
except ImportError as e:
    print(f" Auth import failed: {e}")

@app.get('/')
async def landing():
    return {"Message": "Hello user"}

@app.get("/test")
async def test():
    try:
        count = users_collection.count_documents({})
        return {"Message": f"Successfully connected to MongoDB ({count})"}
    except Exception as e:
        return {"error": f"MongoDB connection failed: {str(e)}"}

@app.post('/Signup')
async def Register(user: dict):
    try:
        existing_user = users_collection.find_one({'email': user["email"]})
        if existing_user:
            return {"error": "User already exists"}
        
        users_collection.insert_one(user)
        token = access_token({"email": user["email"]})
        return {"message": "User registered successfully", "token": token}
    except Exception as e:
        return {"error": f"Registration failed: {str(e)}"}