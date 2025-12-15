import type { PastGroup } from "../Types/group";
import { Plus, Users, BookOpen, BotIcon} from "lucide-react";

 
export const pastGroups: PastGroup[] = [
  {
    id: "1",
    name: "Computer Science Fundamentals",
    subject: "Computer Science",
    members: 6,
    lastActive: "2 days ago",
    sessionsCompleted: 12,
    skillLevel: "Beginner",
  },
  {
    id: "2",
    name: "Data Structures Study",
    subject: "Computer Science",
    members: 4,
    lastActive: "1 week ago",
    sessionsCompleted: 8,
    skillLevel: "Intermediate",
  },
  {
    id: "3",
    name: "Linear Algebra Group",
    subject: "Mathematics",
    members: 5,
    lastActive: "3 weeks ago",
    sessionsCompleted: 6,
    skillLevel: "Intermediate",
  },
];

export const quickActions = [
  {
    icon: Plus,
    label: "Create Group",
    description: "Start a new study group",
    color: "from-blue-600 to-purple-700",
    link: "/create-group",
  },
  {
    icon: Users,
    label: "Learn with AI",
    description: "Learn along with AI",
    color: "from-green-600 to-blue-700",
    link: "ai-center",
  },
  {
    icon: BotIcon,
    label: "Start An Online Session",
    description: "Plan a digitized online session",
    color: "from-purple-600 to-pink-700",
    link: "/schedule",
  },
  {
    icon: BookOpen,
    label: "My Notes",
    description: "Access your materials",
    color: "from-orange-600 to-red-700",
    link: "/notes",
  },
];
