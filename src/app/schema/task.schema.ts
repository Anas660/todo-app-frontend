import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string(),
  color: z.string().nullable(),
  completed: z.boolean().nullable(),
});

export type CreateTaskSchemaType = z.infer<typeof createTaskSchema>;
