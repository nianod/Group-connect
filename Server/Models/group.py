from bson import ObjectId

def group_helper(group) -> dict:
    return {
        "id": str(group["_id"]),
        "groupName": group.get("groupName", ""),
        "subject": group.get("subject", None),
        "description": group.get("description", None),
        "maxMembers": group.get("maxMembers", None),
        "skillLevel": group.get("skillLevel", None),
        "meetingFrequency": group.get("meetingFrequency", None),
        "meetingTime": group.get("meetingTime", None),
        "meetingDate": group.get("meetingDate", None),
        "location": group.get("location", None),
        "created_at": group.get("created_at", None)
    }
