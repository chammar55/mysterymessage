import { z } from "zod";

// zod (z) simply is just a library to check validations
export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be at least of 10 characters" })
    .max(300, { message: "Content must be no longer then 300 characters" }),
});
