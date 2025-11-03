from fastapi import APIRouter
from bson import ObjectId
from Database.Users.db import groups_collection

router = APIRouter()

@router.get("/groups/all")
def get_groups():
    groups = list(groups_collection.find())
    for g in groups:
        g["_id"] = str(g["_id"])  
    return groups
