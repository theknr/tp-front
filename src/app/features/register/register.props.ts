import { z } from "zod";

export const schema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
      })
      .min(1, { message: "Username is required" })
      .transform((val) => val.trim()),
    email: z.string().email(),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
    confirmPassword: z.string({
      required_error: "Confirm password is required",
      invalid_type_error: "Confirm password must be a string",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type Inputs = z.infer<typeof schema>;
