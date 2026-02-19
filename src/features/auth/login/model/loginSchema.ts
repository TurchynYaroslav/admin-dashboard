import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Incorrect mail format"),
  password: z
    .string()
    .min(6, "The password must be at least 6 characters long."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
