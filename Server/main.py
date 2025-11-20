from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Auth.Services.authService import hash_password
from Auth.Services.authService import verify_password
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
from starlette.concurrency import run_in_threadpool
from fastapi import HTTPException, status
from Routes import user
from Routes.send import router as send_router  
from Routes.group import router as group_router
app = FastAPI()
import os 

origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
print("origina are...", origins)


app.add_middleware(
    CORSMiddleware,
    allow_origins =["*"],
    allow_credentials=False,
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
        existing_user = await run_in_threadpool(
            lambda: users_collection.find_one({"email": user.email})
        )

        if not existing_user:
            return {"Message": "User not found"}

        is_valid = await run_in_threadpool(
            lambda: verify_password(user.password, existing_user["password"])
        )

        if not is_valid:
            return {"Message": "User not found"}

        # token = await run_in_threadpool(
        #     lambda: access_token({"email": user.email})
        # )

        token = await run_in_threadpool(
            lambda: access_token({"_id": str(existing_user["_id"]), "email": user.email})
        )


        return {"Message": "Login successful", "token": token}

    except Exception as e:
        return {"error": f"Login Failed {str(e)}"}


# Register Route
@app.post('/signup')
async def Register(user: UserCredentials):
    try:
        # Blocking DB call == threadpool
        existing_user = await run_in_threadpool(
            lambda: users_collection.find_one({'email': user.email})
        )

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User already exists"
            )

        # Hashing == threadpool
        hashed_password = await run_in_threadpool(
            lambda: hash_password(user.password)
        )

        # Insert == threadpool
        result = await run_in_threadpool(
            lambda: users_collection.insert_one({
                "email": user.email,
                "password": hashed_password,
                "name": user.name
            })
        )

        user_id = str(result.inserted_id)

        token = await run_in_threadpool(
            lambda: access_token({"_id": user_id, "email": user.email})
        )
        

        # token = await run_in_threadpool(
        #     lambda: access_token({"email": user.email})
        # )

        # token = await run_in_threadpool(
        #     lambda: access_token({"_id": str(existing_user["_id"]), "email": user.email})
        # )

        return {"message": "User registered successfully", "token": token}

    except HTTPException:
        raise

    except Exception as e:
        return {"error": f"Registration failed: {str(e)}"}

    
app.include_router(user.router, prefix="/user")
app.include_router(group_router)
app.include_router(send_router)

