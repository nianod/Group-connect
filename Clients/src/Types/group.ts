export interface UpcomingSession {
  id: string;
  name: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  members: number;
  maxMembers: number;
  skillLevel: string;
}

export interface PastGroup {
  id: string;
  name: string;
  subject: string;
  members: number;
  lastActive: string;
  sessionsCompleted: number;
  skillLevel: string;
}

export interface UpcomingSession  {
  _id: string;
  group_name: string;
  subject: string;
  meeting_date: string;
  meeting_time: string;
  max_members: number;
  skill_level: string;
  description?: string;
};

export interface User {
  name: string;
  email: string;
  role?: string;
  university?: string;
  bio?: string;
  avatar?: string | null;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  subject: string;
  lastModified: string;
  shared: boolean;
  tags: string[];
}

export interface UpcomingSession {
  _id: string;
  groupName: string;
  subject: string;
  meetingDate: string;
  meetingTime: string;
  maxMembers: number;
  skillLevel: string;
  description?: string;
  meetingFrequency?: string;
  location?: string;
  created_at?: string;
};
