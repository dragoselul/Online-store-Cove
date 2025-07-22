import { Container, Text } from "@chakra-ui/react";

export default function Cart() {
    return (
        <Container maxW="container.xl" py={28}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Cosul de cumparaturi
        </Text>
        <Text>Cosul este gol.</Text>
        {/* Here you can add more functionality like displaying items in the cart */}
        </Container>
    );
    }