import SignupForm from "@/components/AuthenticationForm";
import { Container } from "@chakra-ui/react";

export default function AccountPage() {
  return (
    <Container maxW="container.xl" py={40}>
      <SignupForm />
    </Container>
  );
}