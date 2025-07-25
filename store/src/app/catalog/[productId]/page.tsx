import { Product } from "@/model/product";
import {
  Container,
  Text,
  SimpleGrid,
  Stack,
  Divider,
  Heading,
  Box,
  HStack,
} from "@chakra-ui/react";
import ImageCarousel from "@/components/ImageCarousel";
import ProductDescription from "@/components/ProductDescription";
import ClotheSizeSelector from "@/components/ClotheSizeSelector";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  // fetch your real product here…
  const product: Product & { images: string[] } = {
    id: Number(productId),
    name: `Product ${productId}`,
    description: new Map([
      ["Overview", `Description for product ${productId}`],
      ["Details", `More details about product ${productId}`],
      ["Specifications", `Specifications for product ${productId}`],
    ]),
    price: 19.99 + Number(productId),
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1752771433743-47a49376fb63?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1752867942884-e58115c2cc52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };

  return (
    <Container maxW="container.xl" py={40}>
      <Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Left: Carousel */}
          <Box>
            <ImageCarousel
              images={product.images}
              height={{ base: "250px", md: "400px" }}
            />
          </Box>

          {/* Right: Details */}
          <Stack spacing={4} textAlign={{ base: "center", md: "left" }}>
            <Heading>{product.name}</Heading>
            <Text fontSize="xl" color="blue.600">
              ${product.price.toFixed(2)}
            </Text>
            <Divider borderColor="gray.500" />
            <ClotheSizeSelector />
            <Divider borderColor="gray.500" />
            <Text lineHeight="tall">
              {product.description.get("Overview") ||
                "No description available."}
            </Text>
            {/* add more specs, links, buttons, etc. */}
          </Stack>
        </SimpleGrid>
        <Divider py={4} borderColor="gray.500" />
        <ProductDescription description={product.description} />
      </Stack>
    </Container>
  );
}
