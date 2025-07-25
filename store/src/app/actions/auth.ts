"use server";
import { AuthenticationActionState, signUpSchema, loginSchema } from "@/model/auth";

export async function signup(
  initialState: AuthenticationActionState,
  formData: FormData
): Promise<AuthenticationActionState> {
  const form = Object.fromEntries(formData)
  const validationResult = await signUpSchema.safeParseAsync(form)

  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.issues.map(issue => ({fieldName: issue.path[0].toString(), message: issue.message}))
    }
  }
  //TODO handle user creation logic here
  // When the backend is ready, replace this with actual user creation logic

  return {
    form,
    errors: undefined
  }
}

export async function login(
  initialState: AuthenticationActionState,
  formData: FormData
): Promise<AuthenticationActionState> {
  const form = Object.fromEntries(formData)
  const validationResult = await loginSchema.safeParseAsync(form)

  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.issues.map(issue => ({fieldName: issue.path[0].toString(), message: issue.message}))
    }
  }

  //TODO handle user login logic here
  // When the backend is ready, replace this with actual user login logic
  
  return {
    form,
    errors: undefined
  }
}
