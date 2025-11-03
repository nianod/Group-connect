from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class groupCreate(BaseModel):
    groupName: str =Field(..., min_length=3, max_length=100)
    subject: str
    description: str
    maxMembers: int
    meetingFrequency: str
    skillLevel: str
    meetingTime: Optional[str] = None
    location: Optional[str] = None
    meetingDate: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

       