import { z } from "zod";

export const schema = z.object({
  username: z.string(),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
});

export type Inputs = z.infer<typeof schema>;
