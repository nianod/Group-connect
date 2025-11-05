from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Auth.Services.authService import hash_password
from Auth.Services.authService import verify_password
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
from Routes import user
from Routes.send import router as send_router  
from Routes.group import router as group_router


app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class UserCredentials(BaseModel):
    email: str
    password: str
    name: str

class LoginCredentials(BaseModel):
    email: str
    password: str

try:
    from Database.Users.db import users_collection
    print("Database import successful")
except ImportError as e:
    print(f"Database import failed: {e}")

try:
    from Auth.Services.authService import access_token
    print("Auth import successful")
    print(f"access toke type: {(access_token)}")
    print(f'Access token is:  {access_token}')
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
    
# Login Route
@app.post('/signin')
async def Login(user: LoginCredentials):
    try:
        existing_user = users_collection.find_one({"email": user.email})

        if not existing_user:
            return {"Message": "User not found"}
        

        if not verify_password(user.password, existing_user['password']):
            return {"Message": "User not found"}
        
        token = access_token({"email": user.email})
        return {"Message": "Login successful", "token": token}
    except Exception as e:
        return {"error": f"Login Failed {str(e)}"}


# Register Route
@app.post('/signup')
async def Register(user: UserCredentials):
    try:
        existing_user = users_collection.find_one({'email': user.email})
        if existing_user:
            return {"error": "User already exists"}
        
        # hashed_password = hash_password(user["password"])
        hashed_password = hash_password(user.password)


        #Insert data into mongo
        users_collection.insert_one({
            "email": user.email,
            "password": hashed_password,
            "name": user.name
        })
        # token = access_token({"email": user["email"]})
        token = access_token({"email": user.email})
        return {"message": "User registered successfully", "token": token}
    except Exception as e:
        return {"error": f"Registration failed: {str(e)}"}
    



app.include_router(user.router, prefix="/user")
app.include_router(group_router)
app.include_router(send_router)
