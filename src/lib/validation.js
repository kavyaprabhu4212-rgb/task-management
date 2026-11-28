import { z } from "zod";

export const taskSchema = z.object({
    title: z.string().min(3, "Title must contain at least 3 characters"),
    description: z.string().min(5),
    status: z.enum(["Pending", "Completed"])
});