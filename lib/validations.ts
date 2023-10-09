import { z } from "zod";

export const UserSchema = z.object({
  title: z.string().min(2).max(100),
  desc: z.string().min(50),
  tags: z.array(z.string()).max(3),
});

// extract the type

// extract the inferred type
export type UserType = z.infer<typeof UserSchema>;
