from bson import ObjectId

def online_meeting(online) -> dict:
    return {
        "id": str(online["_id"]),
        "sessionTitle": online["sessionTitle"],
        "subject": online["subject"],
        "meetingLink": online["meetingLink"],
        "meetingDate": online["meetingDate"],
        "meetingTime": online["meetingTime"],
        "duration": online["duration"],
        "description": online["description"],
        "meetingPlatform": online["meetingPlatform"]
    }
