import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, closeSidebar }) {

    const menuItems = [
        { name: "Dashboard", path: "/", icon: "🏠" },
        { name: "My Tasks", path: "/tasks", icon: "📋" },
        { name: "Create Task", path: "/create-task", icon: "➕" },
        { name: "Calendar", path: "/calendar", icon: "📅" },
        { name: "Profile", path: "/profile", icon: "👤" }
    ];

    return (
        <>
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>

                <div className="sidebar-heading">
                    WORKSPACE
                </div>

                <ul>

                    {menuItems.map((item) => (

                        <li key={item.path}>

                            <NavLink
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                                onClick={closeSidebar}
                            >

                                <span>{item.icon}</span>
                                {item.name}

                            </NavLink>

                        </li>

                    ))}

                </ul>

            </aside>

            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={closeSidebar}
                />
            )}
        </>
    );
}

export default Sidebar;