from fastapi import APIRouter, HTTPException
from Database.Users.db import groups_collection
from Services.group import groupCreate
from Models.group import group_helper

router = APIRouter(prefix="/groups", tags=["Groups"])

@router.post("/create")
def create_group(group: groupCreate):
    # Insert new group into MongoDB
    result = groups_collection.insert_one(group.dict())
    new_group = groups_collection.find_one({"_id": result.inserted_id})
    return {"message": "Group created successfully", "group": group_helper(new_group)}

@router.get("/")
def get_all_groups():
    groups = [group_helper(g) for g in groups_collection.find()]
    return {"groups": groups}
  