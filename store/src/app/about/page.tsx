import { Container, Text } from "@chakra-ui/react";

export default function AboutPage() {
    return (
        <Container maxW="container.xl" py={28}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Despre noi
        </Text>
        <Text>
            Suntem o echipă dedicată pasionaților de tehnologie, oferind cele mai bune produse și servicii pentru clienții noștri. Scopul nostru este să aducem inovație și calitate în fiecare produs pe care îl oferim.
        </Text>
        </Container>
    );
 }