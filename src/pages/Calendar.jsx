import React from "react";

function Calendar() {

    return (
        <div className="page-container">

            <h1>Task Calendar</h1>

            <p>View your upcoming tasks and deadlines.</p>

            <div className="calendar-card">

                <h2>Upcoming Activities</h2>

                <ul>
                    <li>Complete Project Documentation</li>
                    <li>Submit Assignment</li>
                    <li>Attend Team Meeting</li>
                </ul>

            </div>

        </div>
    );
}

export default Calendar;