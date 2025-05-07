import { z } from "zod";

// Regex برای رمز عبور
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,128}$/;

// فیلدهای پایه کاربر
export const username = z
  .string()
  .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد")
  .max(20, "نام کاربری نمی‌تواند بیشتر از 20 کاراکتر باشد");

export const email = z
  .string()
  .email("فرمت ایمیل نامعتبر است")
  .min(6, "ایمیل باید حداقل 6 کاراکتر باشد")
  .max(254, "ایمیل نمی‌تواند بیشتر از 254 کاراکتر باشد");

export const password = z
  .string()
  .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
  .max(128, "رمز عبور نمی‌تواند بیشتر از 128 کاراکتر باشد")
  .regex(passwordRegex, "رمز عبور باید شامل حداقل یک حرف و یک عدد باشد");

// فیلدهای اضافی کاربر
export const firstName = z
  .string()
  .max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد")
  .optional();

export const lastName = z
  .string()
  .max(255, "نام خانوادگی نمی‌تواند بیشتر از 255 کاراکتر باشد")
  .optional();

export const phone = z
  .string()
  .max(50, "شماره تلفن نمی‌تواند بیشتر از 50 کاراکتر باشد")
  .optional();

export const address = z
  .string()
  .max(1000, "آدرس نمی‌تواند بیشتر از 1000 کاراکتر باشد")
  .optional();

export const avatarUrl = z
  .string()
  .max(255, "آدرس تصویر نمی‌تواند بیشتر از 255 کاراکتر باشد")
  .optional();

export const isVerified = z.boolean().optional();

export const preferences = z.record(z.any()).optional();

export const department = z
  .string()
  .max(100, "نام دپارتمان نمی‌تواند بیشتر از 100 کاراکتر باشد")
  .optional();

export const jobTitle = z
  .string()
  .max(100, "عنوان شغلی نمی‌تواند بیشتر از 100 کاراکتر باشد")
  .optional();

export const loginAttempts = z
  .number()
  .int()
  .min(0, "تعداد تلاش‌های ورود نمی‌تواند منفی باشد")
  .optional();

export const timezone = z
  .string()
  .max(50, "نام منطقه زمانی نمی‌تواند بیشتر از 50 کاراکتر باشد")
  .optional();

// اسکیما برای ایجاد و به‌روزرسانی کاربر
export const createUserSchema = z.object({
  username,
  email,
  password,
  firstName,
  lastName,
  phone,
  address,
  avatarUrl,
  isVerified,
  preferences,
  department,
  jobTitle,
  loginAttempts,
  timezone,
});

export const updateUserSchema = z.object({
  username: username.optional(),
  email: email.optional(),
  password: password.optional(),
  firstName,
  lastName,
  phone,
  address,
  avatarUrl,
  isVerified,
  preferences,
  department,
  jobTitle,
  timezone,
});

// نوع‌های استخراج‌شده
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
