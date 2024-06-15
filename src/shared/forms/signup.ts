import { z } from "zod";
import LoginFormSchema from "./login";

const SignupFormDataSchema = LoginFormSchema.extend({
  fullname: z
    .string({ required_error: "Fullname is required." })
    .min(1, "Fullname is required.")
    .max(50, "Fullname must be at max 50 characters long."),
  confirmPassword: z.string({
    required_error: "Confirm password is required.",
  }),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password does not match.",
    path: ["confirmPassword"],
  })
  .refine((data) => data.fullname.trim().length > 0, {
    message: "Fullname is required",
    path: ["fullname"],
  });

export default SignupFormDataSchema;
