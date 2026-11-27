import { Bell, Search, User, ChevronDown } from "lucide-react";

function Navbar() {

    return (

        <header className="w-full bg-white border-b border-gray-200 px-6 py-4">

            <div className="flex items-center justify-between">

                {/* Left Section */}

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Dashboard
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Welcome back! Here's your task overview.
                    </p>
                </div>


                {/* Right Section */}

                <div className="flex items-center gap-5">

                    {/* Search */}

                    <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">

                        <Search size={18} className="text-gray-500" />

                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="bg-transparent outline-none text-sm w-40"
                        />

                    </div>


                    {/* Notification */}

                    <button className="relative">

                        <Bell size={21} className="text-gray-600" />

                        <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>

                    </button>


                    {/* Profile */}

                    <div className="flex items-center gap-2 cursor-pointer">

                        <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">

                            <User size={20} className="text-blue-600" />

                        </div>

                        <div className="hidden sm:block">

                            <p className="text-sm font-semibold text-gray-800">
                                Admin
                            </p>

                            <p className="text-xs text-gray-500">
                                Administrator
                            </p>

                        </div>

                        <ChevronDown size={16} className="text-gray-500" />

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;