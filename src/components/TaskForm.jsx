import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// 1. Define Zod Schema
const taskSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Task title is required")
        .min(3, "Title must contain at least 3 characters"),

    description: z
        .string()
        .trim()
        .min(1, "Description is required")
        .min(10, "Description must contain at least 10 characters"),

    priority: z.enum(["Low", "Medium", "High"], {
        message: "Please select a priority"
    }),

    status: z.enum(["Pending", "In Progress", "Completed"], {
        message: "Please select a status"
    }),

    dueDate: z
        .string()
        .min(1, "Due date is required")
        .refine(
            (date) => !isNaN(Date.parse(date)),
            "Please enter a valid date"
        )
});

// 2. Create Task Form
function TaskForm() {

    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: "",
            description: "",
            priority: "Medium",
            status: "Pending",
            dueDate: ""
        }
    });

    // 3. Submit Function
    const onSubmit = async (data) => {

        setSuccess("");

        try {
            console.log("Task Details:", data);

            // Simulate successful submission
            await new Promise((resolve) =>
                setTimeout(resolve, 500)
            );

            setSuccess("Task created successfully!");

            reset();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="task-form-container">

            <h2>Create New Task</h2>

            <p>Enter your task details below.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Task Title */}
                <div className="form-group">

                    <label>Task Title *</label>

                    <input
                        type="text"
                        placeholder="Enter task title"
                        {...register("title")}
                    />

                    {errors.title && (
                        <span className="error">
                            {errors.title.message}
                        </span>
                    )}

                </div>

                {/* Description */}
                <div className="form-group">

                    <label>Description *</label>

                    <textarea
                        placeholder="Enter task description"
                        {...register("description")}
                    />

                    {errors.description && (
                        <span className="error">
                            {errors.description.message}
                        </span>
                    )}

                </div>

                {/* Priority */}
                <div className="form-group">

                    <label>Priority *</label>

                    <select {...register("priority")}>

                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>

                    </select>

                    {errors.priority && (
                        <span className="error">
                            {errors.priority.message}
                        </span>
                    )}

                </div>

                {/* Status */}
                <div className="form-group">

                    <label>Status *</label>

                    <select {...register("status")}>

                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>

                    </select>

                    {errors.status && (
                        <span className="error">
                            {errors.status.message}
                        </span>
                    )}

                </div>

                {/* Due Date */}
                <div className="form-group">

                    <label>Due Date *</label>

                    <input
                        type="date"
                        {...register("dueDate")}
                    />

                    {errors.dueDate && (
                        <span className="error">
                            {errors.dueDate.message}
                        </span>
                    )}

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating..." : "Create Task"}
                </button>

                {/* Success Message */}
                {success && (
                    <div className="success">
                        {success}
                    </div>
                )}

            </form>

        </div>
    );
}

export default TaskForm;