import { z } from "zod";
const signUpSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    username: z
      .string()
      .min(10, { message: "username must be at least 10 caracter" })
      .max(30, { message: "username must be at most 30 caracters" }),
    password: z
      .string()
      .min(12, { message: "password must be at least 12 caracter" })
      .regex(new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{12,}$/), {
        message:
          "password must be at least 12 characters, including at least one special character, one uppercase letter, and one digit",
      }),
    confirmPassword: z
      .string()
      .min(12, { message: "password must be at least 12 caracter" })
      .regex(new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{12,}$/), {
        message:
          "password must be at least 12 characters, including at least one special character, one uppercase letter, and one digit",
      }),
    email: z
      .string()
      .regex(new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), {
        message: "Invalid email format",
      }),
    phone: z.string().regex(new RegExp(/^\+?[1-9]\d{1,14}$/), {
      message: "Invalid phone number format",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
type signUpFormType = z.infer<typeof signUpSchema>;
export { signUpFormType, signUpSchema };
