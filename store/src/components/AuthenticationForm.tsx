"use client";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useActionState } from "react";
import { signup, login } from "@/app/actions/auth";

export default function AuthenticationForm({
  isSignup,
}: {
  isSignup: boolean;
}) {
  const [state, formAction, isPending] = useActionState(
    isSignup ? signup : login,
    {}
  );

  return (
    <form action={formAction} noValidate>
      <Stack spacing={4} maxW="md" mx="auto">
        {/* Email Field */}
        <FormControl isRequired>
          <FormLabel fontWeight="bold">Adresa de email</FormLabel>
          <Input name="email" type="email" />
          <FormHelperText>Exemplu: email@gmail.com</FormHelperText>
          {state?.errors?.map((error, index) => (
            error.fieldName === "email" && (
              <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
            )
          ))}
        </FormControl>

        {/* Password Field */}
        <FormControl isRequired>
          <FormLabel fontWeight="bold">Parola</FormLabel>
          <Input name="password" type="password" />
          <FormHelperText>
            Trebuie să conțină cel puțin o literă mare, un număr și un simbol.
          </FormHelperText>
          {
          state?.errors?.map((error, index) => (
            error.fieldName === "password" && (
              <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
            )
          ))}
        </FormControl>

        {/* Confirm Password (only on signup) */}
        {isSignup && (
          <FormControl isRequired>
            <FormLabel fontWeight="bold">Confirmă Parola</FormLabel>
            <Input name="confirmPassword" type="password" />
            {state?.errors?.map((error, index) => (
            error.fieldName === "confirmPassword" && (
              <FormErrorMessage key={index}>{error.message}</FormErrorMessage>
            )
          ))}
          </FormControl>
        )}
        <Button type="submit" colorScheme="blue" isLoading={isPending}>
          {isSignup ? "Înregistrează-te" : "Autentifică-te"}
        </Button>
      </Stack>
    </form>
  );
}
