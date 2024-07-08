import { z } from "zod";

// zod (z) simply is just a library to check validations
export const acceptMessageSchema = z.object({
  acceptMessages: z.boolean(),
});
