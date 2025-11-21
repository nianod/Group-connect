from bson import ObjectId

def group_helper(group) -> dict:
    return {
        "id": str(group["_id"]),
        "groupName": group.get["groupName", ""],
        "subject": group["subject"],
        "description": group["description"],
        "maxMembers": group["maxMembers"],
        "skillLevel": group["skillLevel"],
        "meetingFrequency": group["meetingFrequency"],
        "meetingTime": group.get("meetingTime"),
        "meetingDate": group.get("meetingDate"),
        "location": group.get("location"),
        "created_at": group.get("created_at")
    }
 