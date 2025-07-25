"use server";
import { AuthenticationActionState, signUpSchema, loginSchema } from "@/model/auth";

export async function signup(
  initialState: AuthenticationActionState,
  formData: FormData
): Promise<AuthenticationActionState> {
  const form = Object.fromEntries(formData)
  const validationResult = await signUpSchema.safeParseAsync(form)
  
  console.log("Signup validation hit");
  if (!validationResult.success) {
    console.log({
      form,
      errors: validationResult.error.issues.map(issue => ({fieldName: issue.path[0].toString(), message: issue.message}))
    })
    return {
      form,
      errors: validationResult.error.issues.map(issue => ({fieldName: issue.path[0].toString(), message: issue.message}))
    }
  }
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
  return {
    form,
    errors: undefined
  }
}
