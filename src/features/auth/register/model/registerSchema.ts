import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Incorrect mail format"),
    password: z
      .string()
      .min(6, "The password must be at least 6 characters long."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
