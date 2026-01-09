"use client";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signUpSchema, loginSchema } from "@/model/auth";

export default function AuthenticationForm({
  isSignup,
}: {
  isSignup: boolean;
}) {
  const [errors, setErrors] = useState<{ fieldName: string; message: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    // Validate with Zod
    const schema = isSignup ? signUpSchema : loginSchema;
    const validation = schema.safeParse(data);

    if (!validation.success) {
      setErrors(
        validation.error.issues.map((issue) => ({
          fieldName: issue.path[0]?.toString() || "form",
          message: issue.message,
        }))
      );
      setIsLoading(false);
      return;
    }

    if (isSignup) {
      // TODO: Implement signup API call
      // For now, show a message that signup needs backend implementation
      toast({
        title: "Înregistrare",
        description: "Funcția de înregistrare necesită configurare backend. Folosește demo@example.com / Demo123! pentru test.",
        status: "info",
        duration: 5000,
      });
      setIsLoading(false);
      return;
    }

    // Login with NextAuth
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setErrors([{ fieldName: "form", message: result.error }]);
      toast({
        title: "Eroare de autentificare",
        description: result.error,
        status: "error",
      });
    } else {
      toast({
        title: "Autentificare reușită",
        description: "Bine ai venit!",
        status: "success",
      });
      router.push("/account");
      router.refresh();
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack spacing={4} maxW="md" mx="auto">
        {/* General form error */}
        {errors.some(error => error.fieldName === "form") && (
          <FormControl isInvalid>
            {errors
              .filter(error => error.fieldName === "form")
              .map((error, index) => (
                <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
              ))}
          </FormControl>
        )}

        {/* Email Field */}
        <FormControl isRequired isInvalid={errors.some(error => error.fieldName === "email")}>
          <FormLabel fontWeight="bold">Adresa de email</FormLabel>
          <Input name="email" type="email" />
          <FormHelperText>Exemplu: email@gmail.com</FormHelperText>
          {errors.map((error, index) => (
            error.fieldName === "email" && (
              <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
            )
          ))}
        </FormControl>

        {/* Password Field */}
        <FormControl isRequired isInvalid={errors.some(error => error.fieldName === "password")}>
          <FormLabel fontWeight="bold">Parola</FormLabel>
          <Input name="password" type="password" />
          <FormHelperText>
            Trebuie să conțină cel puțin o literă mare, un număr și un simbol.
          </FormHelperText>
          {errors.map((error, index) => (
            error.fieldName === "password" && (
              <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
            )
          ))}
        </FormControl>

        {/* Confirm Password (only on signup) */}
        {isSignup && (
          <FormControl isRequired isInvalid={errors.some(error => error.fieldName === "confirmPassword")}>
            <FormLabel fontWeight="bold">Confirmă Parola</FormLabel>
            <Input name="confirmPassword" type="password" />
            {errors.map((error, index) => (
              error.fieldName === "confirmPassword" && (
                <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
              )
            ))}
          </FormControl>
        )}
        <Button type="submit" colorScheme="blue" isLoading={isLoading}>
          {isSignup ? "Înregistrează-te" : "Autentifică-te"}
        </Button>
      </Stack>
    </form>
  );
}
