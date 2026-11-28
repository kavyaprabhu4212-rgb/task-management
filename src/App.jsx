import React, { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

// Page Components
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";

// CSS
import "./App.css";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    // Close Sidebar
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (

        <BrowserRouter>

            <div className="app-layout">

                {/* Navbar */}
                <Navbar
                    toggleSidebar={toggleSidebar}
                />

                <div className="main-layout">

                    {/* Sidebar */}
                    <Sidebar
                        isOpen={isOpen}
                        closeSidebar={closeSidebar}
                    />

                    {/* Main Content */}
                    <main
                        className="main-content"
                        onClick={closeSidebar}
                    >

                        <Routes>

                            {/* Dashboard */}
                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            {/* All Tasks */}
                            <Route
                                path="/tasks"
                                element={<Tasks />}
                            />

                            {/* Create Task */}
                            <Route
                                path="/create-task"
                                element={<CreateTask />}
                            />

                            {/* Calendar */}
                            <Route
                                path="/calendar"
                                element={<Calendar />}
                            />

                            {/* User Profile */}
                            <Route
                                path="/profile"
                                element={<Profile />}
                            />

                            {/* Invalid URL */}
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />

                        </Routes>

                    </main>

                </div>

            </div>

        </BrowserRouter>

    );
}

export default App;