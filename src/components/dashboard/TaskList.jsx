import { tasks } from "@/data/tasks";

import { Badge } from "@/components/ui/badge";

import { CalendarDays, MoreHorizontal } from "lucide-react";

function TaskList() {

    return (

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        Recent Tasks
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage and track your recent activities.
                    </p>
                </div>

                <button className="text-blue-600 text-sm font-medium">
                    View All
                </button>

            </div>


            {/* Task List */}

            <div className="space-y-4">

                {tasks.map((task) => (

                    <div
                        key={task.id}
                        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                    >

                        {/* Task Information */}

                        <div className="flex-1">

                            <h3 className="font-semibold text-gray-800">
                                {task.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {task.description}
                            </p>

                            <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">

                                <CalendarDays size={15} />

                                <span>
                                    Due: {task.dueDate}
                                </span>

                            </div>

                        </div>


                        {/* Priority and Status */}

                        <div className="flex items-center gap-3 flex-wrap">

                            <Badge
                                className={
                                    task.priority === "High"
                                        ? "bg-red-100 text-red-700 hover:bg-red-100"
                                        : task.priority === "Medium"
                                            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                                            : "bg-green-100 text-green-700 hover:bg-green-100"
                                }
                            >
                                {task.priority}
                            </Badge>


                            <Badge
                                variant="outline"
                                className={
                                    task.status === "Completed"
                                        ? "border-green-500 text-green-600"
                                        : task.status === "In Progress"
                                            ? "border-blue-500 text-blue-600"
                                            : "border-orange-500 text-orange-600"
                                }
                            >
                                {task.status}
                            </Badge>


                            <button className="text-gray-400 hover:text-gray-700">
                                <MoreHorizontal size={20} />
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default TaskList;