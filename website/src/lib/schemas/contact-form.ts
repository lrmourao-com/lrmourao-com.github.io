import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is too short" }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  locale: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

