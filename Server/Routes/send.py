# from fastapi import APIRouter
# from bson import ObjectId
# from Database.Users.db import groups_collection

# router = APIRouter()

# @router.get("/groups/all")
# def get_groups():
#     groups = list(groups_collection.find())
#     for g in groups:
#         g["_id"] = str(g["_id"])  
#     return groups



from fastapi import APIRouter, Depends
from bson import ObjectId
from Database.Users.db import groups_collection
from Auth.Services.authService import get_current_user

router = APIRouter()

@router.get("/my")
def get_my_groups(current_user=Depends(get_current_user)):
    groups = list(groups_collection.find({"creatorId": str(current_user["_id"])}))
    for g in groups:
        g["_id"] = str(g["_id"])
    return groups
