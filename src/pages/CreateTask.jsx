import React from "react";
import TaskForm from "../components/TaskForm";

function CreateTask() {

    return (
        <div className="page-container">

            <h1>Create New Task</h1>

            <TaskForm />

        </div>
    );
}

export default CreateTask;