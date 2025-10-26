from fastapi import FastAPI
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

 
MONGO_URL = os.getenv("MONGO_URL")
client = MongoClient(MONGO_URL)
db = client["group_connect"]
users_collection = db["users"]

@app.get("/")
def root():
    return {"message": "Group Connect backend is running!"}
