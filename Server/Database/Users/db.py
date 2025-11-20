 
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

 
client = MongoClient(
    MONGO_URL,
    serverSelectionTimeoutMS=5000,   
)

db = client["group_connect"]

users_collection = db["users"]
groups_collection = db["group-create"]
