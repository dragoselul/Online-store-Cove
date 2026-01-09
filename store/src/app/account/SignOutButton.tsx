"use client";

import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button
      colorScheme="red"
      variant="outline"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Deconectare
    </Button>
  );
}
