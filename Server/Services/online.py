from pydantic import Basemodel, Field
from typing import Optional
from datetime import datetime

class onlineSession(Basemodel):
    sessionTitle: str = Field(..., min_legth=5, max_legth=100)
    subject: str
    meetingLink: str
    meetingDate: Optional[str] = None
    meetingTime: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    duration: str
    description: str
    meetingPlatform: str