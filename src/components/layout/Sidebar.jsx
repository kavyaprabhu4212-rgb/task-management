import {
    LayoutDashboard,
    ListTodo,
    Clock,
    CheckCircle,
    CalendarDays,
    Settings,
    LogOut
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Tasks", icon: ListTodo },
    { name: "In Progress", icon: Clock },
    { name: "Completed", icon: CheckCircle },
    { name: "Calendar", icon: CalendarDays },
    { name: "Settings", icon: Settings }
];

function Sidebar({ activePage, setActivePage }) {

    return (

        <aside className="hidden md:flex flex-col w-64 min-h-screen bg-slate-950 text-white p-5">

            {/* Logo */}

            <div className="mb-10">

                <h1 className="text-2xl font-bold text-blue-400">
                    TaskFlow.
                </h1>

                <p className="text-xs text-slate-400 mt-1">
                    Smart Task Management
                </p>

            </div>

            {/* Workspace */}

            <p className="text-xs uppercase tracking-wider text-slate-500 mb-4">
                Workspace
            </p>

            {/* Navigation */}

            <nav className="space-y-2 flex-1">

                {menuItems.map((item) => {

                    const Icon = item.icon;

                    return (

                        <button
                            key={item.name}
                            onClick={() => setActivePage(item.name)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm transition-all ${
                                activePage === item.name
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`}
                        >

                            <Icon size={19} />

                            <span>{item.name}</span>

                        </button>

                    );

                })}

            </nav>

            {/* Logout */}

            <button className="flex items-center gap-3 p-3 text-slate-400 hover:text-white">

                <LogOut size={19} />

                <span>Logout</span>

            </button>

        </aside>

    );

}

export default Sidebar;

