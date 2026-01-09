import { Container, Card, CardBody, Heading, Text, Stack, Button, Avatar, HStack, VStack, Divider } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "./SignOutButton";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/account/authenticate");
  }

  return (
    <Container maxW="container.md" py={40}>
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            <HStack spacing={4}>
              <Avatar name={session.user?.name || session.user?.email || "User"} size="lg" />
              <VStack align="start" spacing={1}>
                <Heading size="md">Bine ai venit!</Heading>
                <Text color="gray.600">{session.user?.email}</Text>
              </VStack>
            </HStack>

            <Divider />

            <Stack spacing={4}>
              <Heading size="sm">Informații cont</Heading>
              <Stack spacing={2}>
                <HStack justify="space-between">
                  <Text fontWeight="medium">Nume:</Text>
                  <Text>{session.user?.name || "Nesetat"}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text fontWeight="medium">Email:</Text>
                  <Text>{session.user?.email}</Text>
                </HStack>
              </Stack>
            </Stack>

            <Divider />

            <SignOutButton />
          </VStack>
        </CardBody>
      </Card>
    </Container>
  );
}