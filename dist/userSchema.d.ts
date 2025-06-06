import { z } from "zod";
export declare const username: z.ZodString;
export declare const email: z.ZodString;
export declare const password: z.ZodString;
export declare const firstName: z.ZodOptional<z.ZodString>;
export declare const lastName: z.ZodOptional<z.ZodString>;
export declare const phone: z.ZodOptional<z.ZodString>;
export declare const address: z.ZodOptional<z.ZodString>;
export declare const avatarUrl: z.ZodOptional<z.ZodString>;
export declare const isVerified: z.ZodOptional<z.ZodBoolean>;
export declare const preferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
export declare const department: z.ZodOptional<z.ZodString>;
export declare const jobTitle: z.ZodOptional<z.ZodString>;
export declare const loginAttempts: z.ZodOptional<z.ZodNumber>;
export declare const timezone: z.ZodOptional<z.ZodString>;
export declare const createUserSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    preferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    department: z.ZodOptional<z.ZodString>;
    jobTitle: z.ZodOptional<z.ZodString>;
    loginAttempts: z.ZodOptional<z.ZodNumber>;
    timezone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    avatarUrl?: string | undefined;
    isVerified?: boolean | undefined;
    preferences?: Record<string, any> | undefined;
    department?: string | undefined;
    jobTitle?: string | undefined;
    loginAttempts?: number | undefined;
    timezone?: string | undefined;
}, {
    username: string;
    email: string;
    password: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    avatarUrl?: string | undefined;
    isVerified?: boolean | undefined;
    preferences?: Record<string, any> | undefined;
    department?: string | undefined;
    jobTitle?: string | undefined;
    loginAttempts?: number | undefined;
    timezone?: string | undefined;
}>;
export declare const updateUserSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    preferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    department: z.ZodOptional<z.ZodString>;
    jobTitle: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    avatarUrl?: string | undefined;
    isVerified?: boolean | undefined;
    preferences?: Record<string, any> | undefined;
    department?: string | undefined;
    jobTitle?: string | undefined;
    timezone?: string | undefined;
}, {
    username?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    avatarUrl?: string | undefined;
    isVerified?: boolean | undefined;
    preferences?: Record<string, any> | undefined;
    department?: string | undefined;
    jobTitle?: string | undefined;
    timezone?: string | undefined;
}>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
