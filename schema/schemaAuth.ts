import { z } from "zod";
const authSchema = z.object({
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
});
type authFormType = z.infer<typeof authSchema>;
export { authFormType, authSchema };
