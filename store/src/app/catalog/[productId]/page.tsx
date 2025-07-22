import { Product } from "@/model/product";
import {
  Container,
  Text,
  Stack,
  Image,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Heading,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../../page.module.css";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  // const res = await fetch(`https://plm.com/products/${params.product}`, {
  //     next: { revalidate: 60 }
  // });
  // const product: Product = await res.json();
  const { productId } = await params;
  const product: Product = {
    id: productId,
    name: `Product ${productId}`,
    description: `Description for product ${productId}`,
    price: 19.99 + productId,
    images: null,
  };

  return (
    <Container className={styles.catalog} maxW="container.xl" py={28}>
      <Card as={Box} size="sm" overflow="hidden" boxShadow="lg" borderRadius="lg" direction={{ base: "column", md: "row" }}>
          <CardBody
          display="flex"
          >
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              maxW={{ base: "100%", md: "60%", xl: "75%" }}
            />
          </CardBody>
          
          <Divider orientation="vertical" />
          <CardFooter
          display="flex"
        textAlign={{ base: "center", md: "left" }}>
            <Stack spacing={2} textAlign="center">
              <Heading size="md">{product.name}</Heading>
              <Text>
                {product.description || " Acest produs nu are descriere."}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </CardFooter>
      </Card>
    </Container>
  );
}
