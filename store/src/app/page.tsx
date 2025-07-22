import Image from "next/image";
import styles from "./page.module.css";
import NextLink from "next/link";
import { Container, Stack, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container className={styles.home} maxW="container.xl" py={28}>
      <Stack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Bine ați venit la magazinul nostru online!
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Descoperiți cele mai noi produse și oferte exclusive.
        </Text>
        <Image
          src="/images/welcome.jpg"
          alt="Welcome Image"
          width={600}
          height={400}
          className={styles.welcomeImage}
        />
        <NextLink href="/catalog" passHref>
          <Button colorScheme="blue" size="lg">
            Începeți cumpărăturile
          </Button>
        </NextLink>
      </Stack>
    </Container>
  );
}
