import { z } from "zod";

const User = z.object({
  ques_title: z.string(),
  ques_desc: z.string(),
});

// extract the type

// extract the inferred type
export type UserType = z.infer<typeof User>;
