import { z } from "zod";

// zod (z) simply is just a library to check validations
export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
