import React from "react";
import { useLocation } from "react-router-dom";

function Navbar({ toggleSidebar }) {

    const location = useLocation();

    const pageTitles = {
        "/": "Dashboard",
        "/tasks": "My Tasks",
        "/create-task": "Create Task",
        "/calendar": "Calendar",
        "/profile": "My Profile"
    };

    return (
        <nav className="navbar">

            <div className="navbar-left">

                <button
                    className="menu-btn"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>

                <h2>TaskFlow</h2>

            </div>

            <div className="navbar-right">

                <span className="page-title">
                    {pageTitles[location.pathname]}
                </span>

                <div className="profile-icon">
                    K
                </div>

            </div>

        </nav>
    );
}

export default Navbar;