import React from "react";

function Tasks() {

    const tasks = [
        {
            id: 1,
            title: "Complete Project",
            status: "Pending",
            priority: "High"
        },
        {
            id: 2,
            title: "Prepare Documentation",
            status: "Completed",
            priority: "Medium"
        },
        {
            id: 3,
            title: "Study React Router",
            status: "In Progress",
            priority: "Low"
        }
    ];

    return (
        <div className="page-container">

            <h1>My Tasks</h1>

            <p>Manage and track all your tasks.</p>

            <div className="task-list">

                {tasks.map((task) => (

                    <div className="stat-card" key={task.id}>

                        <h3>{task.title}</h3>

                        <p>Status: {task.status}</p>

                        <p>Priority: {task.priority}</p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Tasks;