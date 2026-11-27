import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import StatsCard from "@/components/dashboard/StatsCard";
import TaskList from "@/components/dashboard/TaskList";

import {
    ListTodo,
    CheckCircle2,
    Clock,
    AlertCircle
} from "lucide-react";


function Dashboard() {

    // Manage active sidebar page
    const [activePage, setActivePage] = useState("Dashboard");


    return (

        <div className="flex min-h-screen bg-slate-100">

            {/* SIDEBAR */}

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />


            {/* MAIN CONTENT */}

            <main className="flex-1 min-w-0">

                {/* NAVBAR */}

                <Navbar />


                <div className="p-6">

                    {/* WELCOME SECTION */}

                    <div className="mb-8">

                        <h1 className="text-2xl font-bold text-gray-800">
                            Welcome to TaskFlow!
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Here's what's happening with your tasks today.
                        </p>

                    </div>


                    {/* STATISTICS CARDS */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                        <StatsCard
                            title="Total Tasks"
                            value={25}
                            icon={ListTodo}
                            color="text-blue-600"
                            bgColor="bg-blue-100"
                        />


                        <StatsCard
                            title="Completed Tasks"
                            value={12}
                            icon={CheckCircle2}
                            color="text-green-600"
                            bgColor="bg-green-100"
                        />


                        <StatsCard
                            title="Pending Tasks"
                            value={10}
                            icon={Clock}
                            color="text-orange-600"
                            bgColor="bg-orange-100"
                        />


                        <StatsCard
                            title="Overdue Tasks"
                            value={3}
                            icon={AlertCircle}
                            color="text-red-600"
                            bgColor="bg-red-100"
                        />

                    </div>


                    {/* TASK MANAGEMENT SECTION */}

                    <TaskList />


                </div>

            </main>

        </div>

    );

}


// EXPORT COMPONENT

export default Dashboard;