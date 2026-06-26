import { LayoutDashboard,LogIn, Info, Mail, ClipboardList, CheckCircle, PlusCircle, Edit, Calendar, BookOpenText, BarChart3, Flame, HelpCircle, FileQuestion, Eye, Sparkles, User, SlidersHorizontal, ShieldCheck, Settings, Wrench,} from "lucide-react";
export const sidebarlinks = {
    assignments: [
        { name:"Upcoming", href:"/assignments", icon: ClipboardList, },
        { name:"Completed", href:"/assignments/completed", icon: CheckCircle,},
        { name:"Add Assignment", href:"/assignments/new", icon: PlusCircle,},
        { name:"Edit Assignments", href:"/assignments/edit", icon: Edit,},
    ],
    calendar: [
        { name:"Calendar", href:"/calendar",icon: Calendar,},
        { name:"Manage Events", href:"/calendar/events", icon: Edit,},
        { name:"Planner", href:"/calendar/planner", icon: ClipboardList,},
        { name:"Smart Review", href:"/calendar/smart", icon: BookOpenText,},
    ],
    dashboard: [
        { name:"Overview", href:"/dashboard", icon: LayoutDashboard,},
        { name:"Results", href:"/dashboard/results", icon: BarChart3,},
        { name:"Streak", href:"/dashboard/streak", icon: Flame,},
        { name:"Smart Review", href:"/dashboard/smart", icon: BookOpenText,},
    ],
    study: [
        { name:"Study", href:"/study", icon: BookOpenText,},
        { name:"Notes", href:"/study/notes", icon: ClipboardList,},
        { name:"Quizzes", href:"/study/quizzes", icon: HelpCircle,},
        { name:"Tests", href:"/study/tests", icon: FileQuestion,},
        { name:"Create", href:"/study/create", icon: PlusCircle,},
        { name:"Review", href:"/study/review", icon: Eye,},
        { name:"Smart analyze", href:"/study/analyze", icon: Sparkles,},

    ],
    settings: [
        { name:"Account", href:"/settings/account", icon: User,},
        { name:"Customization", href:"/settings/customization", icon: SlidersHorizontal,},
        { name:"Privacy", href:"/settings/privacy", icon: ShieldCheck,},
        { name:"Study Preferences", href:"/settings/preferences", icon: Settings,},
        { name:"Advanced", href:"/settings/advanced", icon: Wrench,},
    ],
    home: [
        { name:"Get started", href:"/", icon: LayoutDashboard,},
        { name:"Log in", href:"/login", icon: LogIn,},
        { name:"About us", href:"/about-us", icon: Info,},
        { name:"Contact us", href:"/contact-us", icon: Mail,},
    ],
}
