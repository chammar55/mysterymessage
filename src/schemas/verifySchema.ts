import { z } from "zod";

// zod (z) simply is just a library to check validations
export const verifySchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
});
