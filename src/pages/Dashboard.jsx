import React from "react";

function Dashboard() {

    return (
        <div className="page-container">

            <h1>Dashboard</h1>

            <p>Welcome to your Task Management System!</p>

            <div className="stats-grid">

                <div className="stat-card">
                    <h3>Total Tasks</h3>
                    <h1>25</h1>
                </div>

                <div className="stat-card">
                    <h3>Completed</h3>
                    <h1>15</h1>
                </div>

                <div className="stat-card">
                    <h3>Pending</h3>
                    <h1>10</h1>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;