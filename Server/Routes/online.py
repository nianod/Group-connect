from fastapi import APIRouter, Depends
from bson import ObjectId
from Database.Users.db import groups_collection
from Services.online import onlineSession
from Models.online import online_helper
from Auth.Services.authService import get_current_user

router = APIRouter(prefix="/online", tags=["Online Meetings"])

@router.post("/create")
def create_online_session(
    online: onlineSession,
    current_user: dict = Depends(get_current_user)
):
    online_data = online.dict()
    online_data["creatorId"] = str(current_user["_id"])

    result = groups_collection.insert_one(online_data)
    new_online = groups_collection.find_one({"_id": result.inserted_id})

    return {
        "message": "Online meeting scheduled successfully",
        "online": online_helper(new_online)
    }


@router.get("/")
def get_all_online():
    online = [online_helper(o) for o in groups_collection.find()]
    return {"online": online}


@router.get("/my")
def get_my_online(current_user=Depends(get_current_user)):
    online = list(groups_collection.find({"creatorId": str(current_user["_id"])}))
    for o in online:
        o["_id"] = str(o["_id"])
    return online
