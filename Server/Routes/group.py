# from fastapi import APIRouter, HTTPException
# from Database.Users.db import groups_collection
# from Services.group import groupCreate
# from Models.group import group_helper

# router = APIRouter(prefix="/groups", tags=["Groups"])

# @router.post("/create")
# def create_group(group: groupCreate):
#     # Insert new group into MongoDB
#     result = groups_collection.insert_one(group.dict())
#     new_group = groups_collection.find_one({"_id": result.inserted_id})
#     return {"message": "Group created successfully", "group": group_helper(new_group)}

# @router.get("/")
# def get_all_groups():
#     groups = [group_helper(g) for g in groups_collection.find()]
#     return {"groups": groups}
  


from fastapi import APIRouter, Depends
from bson import ObjectId
from Database.Users.db import groups_collection
from Services.group import groupCreate
from Models.group import group_helper
from Auth.Services.authService import get_current_user   

router = APIRouter(prefix="/groups", tags=["Groups"])

@router.post("/create")
def create_group(
    group: groupCreate,
    current_user: dict = Depends(get_current_user)
):
    group_data = group.dict()
    group_data['creatorId'] = str(current_user['_id'])

    result = groups_collection.insert_one(group_data)
    new_group = groups_collection.find_one({"_id": result.inserted_id})
    return {"message": "Group created successfully", "group": group_helper(new_group)}

@router.get("/")
def get_all_groups():
    groups = [group_helper(g) for g in groups_collection.find()]
    return {"groups": groups}

@router.get("/my")
def get_my_groups(current_user=Depends(get_current_user)):
    groups = list(groups_collection.find({"creatorId": str(current_user["_id"])}))
    for g in groups:
        g["_id"] = str(g["_id"])
    return groups

