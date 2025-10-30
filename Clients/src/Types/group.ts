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