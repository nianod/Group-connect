from bson import ObjectId

def online_helper(online) -> dict:
    return {
        "id": str(online["_id"]),
        "creatorId": online.get("creatorId"),
        "sessionTitle": online["sessionTitle"],
        "subject": online["subject"],
        "meetingLink": online["meetingLink"],
        "meetingDate": online.get("meetingDate"),
        "meetingTime": online.get("meetingTime"),
        "duration": online["duration"],
        "description": online["description"],
        "meetingPlatform": online["meetingPlatform"],
        "created_at": str(online.get("created_at"))
    }
