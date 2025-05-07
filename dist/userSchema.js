"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = exports.timezone = exports.loginAttempts = exports.jobTitle = exports.department = exports.preferences = exports.isVerified = exports.avatarUrl = exports.address = exports.phone = exports.lastName = exports.firstName = exports.password = exports.email = exports.username = void 0;
const zod_1 = require("zod");
// Regex برای رمز عبور
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,128}$/;
// فیلدهای پایه کاربر
exports.username = zod_1.z
    .string()
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد")
    .max(20, "نام کاربری نمی‌تواند بیشتر از 20 کاراکتر باشد");
exports.email = zod_1.z
    .string()
    .email("فرمت ایمیل نامعتبر است")
    .min(6, "ایمیل باید حداقل 6 کاراکتر باشد")
    .max(254, "ایمیل نمی‌تواند بیشتر از 254 کاراکتر باشد");
exports.password = zod_1.z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(128, "رمز عبور نمی‌تواند بیشتر از 128 کاراکتر باشد")
    .regex(passwordRegex, "رمز عبور باید شامل حداقل یک حرف و یک عدد باشد");
// فیلدهای اضافی کاربر
exports.firstName = zod_1.z
    .string()
    .max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد")
    .optional();
exports.lastName = zod_1.z
    .string()
    .max(255, "نام خانوادگی نمی‌تواند بیشتر از 255 کاراکتر باشد")
    .optional();
exports.phone = zod_1.z
    .string()
    .max(50, "شماره تلفن نمی‌تواند بیشتر از 50 کاراکتر باشد")
    .optional();
exports.address = zod_1.z
    .string()
    .max(1000, "آدرس نمی‌تواند بیشتر از 1000 کاراکتر باشد")
    .optional();
exports.avatarUrl = zod_1.z
    .string()
    .max(255, "آدرس تصویر نمی‌تواند بیشتر از 255 کاراکتر باشد")
    .optional();
exports.isVerified = zod_1.z.boolean().optional();
exports.preferences = zod_1.z.record(zod_1.z.any()).optional();
exports.department = zod_1.z
    .string()
    .max(100, "نام دپارتمان نمی‌تواند بیشتر از 100 کاراکتر باشد")
    .optional();
exports.jobTitle = zod_1.z
    .string()
    .max(100, "عنوان شغلی نمی‌تواند بیشتر از 100 کاراکتر باشد")
    .optional();
exports.loginAttempts = zod_1.z
    .number()
    .int()
    .min(0, "تعداد تلاش‌های ورود نمی‌تواند منفی باشد")
    .optional();
exports.timezone = zod_1.z
    .string()
    .max(50, "نام منطقه زمانی نمی‌تواند بیشتر از 50 کاراکتر باشد")
    .optional();
// اسکیما برای ایجاد و به‌روزرسانی کاربر
exports.createUserSchema = zod_1.z.object({
    username: exports.username,
    email: exports.email,
    password: exports.password,
    firstName: exports.firstName,
    lastName: exports.lastName,
    phone: exports.phone,
    address: exports.address,
    avatarUrl: exports.avatarUrl,
    isVerified: exports.isVerified,
    preferences: exports.preferences,
    department: exports.department,
    jobTitle: exports.jobTitle,
    loginAttempts: exports.loginAttempts,
    timezone: exports.timezone,
});
exports.updateUserSchema = zod_1.z.object({
    username: exports.username.optional(),
    email: exports.email.optional(),
    password: exports.password.optional(),
    firstName: exports.firstName,
    lastName: exports.lastName,
    phone: exports.phone,
    address: exports.address,
    avatarUrl: exports.avatarUrl,
    isVerified: exports.isVerified,
    preferences: exports.preferences,
    department: exports.department,
    jobTitle: exports.jobTitle,
    timezone: exports.timezone,
});
//# sourceMappingURL=userSchema.js.map