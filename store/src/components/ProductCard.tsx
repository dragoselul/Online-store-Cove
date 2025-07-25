"use client";
import { IoCartOutline } from "react-icons/io5";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Product } from "@/model/product";
import React from "react";

export default function ProductCard(product: Product) {
  const toast = useToast();
  const id = React.useId();

  return (
    <Card
      size="sm"
      overflow="hidden"
      boxShadow="lg"
      borderRadius="lg"
      _hover={{ textDecoration: "none", bg: "gray.100" }}
    >
      <ChakraLink
        as={NextLink}
        key={product.id}
        href={`/catalog/${product.id}`}
        px={3}
        py={2}
        rounded="md"
        _hover={{ textDecoration: "none"}}
      >
        <CardBody display="flex" flexDirection="column">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            objectFit="cover"
            // responsive 120% width...
            width={{ base: "120%", md: "140%" }}
            h="auto" // Responsive width
          />
          <Stack mt="6" spacing="2">
            <Heading size="md">{product.name}</Heading>
            <Text>
              {product.description.get("Overview") || " Acest produs nu are descriere."}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${product.price.toFixed(2)}
            </Text>
          </Stack>
        </CardBody>
      </ChakraLink>
      <Divider />
      <CardFooter display="flex" justifyContent="center" alignItems="center">
        <ButtonGroup spacing="1" display="flex" justifyContent="space-between">
          <Button
            fontSize={{ base: 18, sm: 18, md: 14, lg: 14, xl: 16 }}
            variant="solid"
            colorScheme="blue"
          >
            Cumpara acum
          </Button>
          <Button
            fontSize={{ base: 30, sm: 28, md: 24, lg: 24, xl: 26 }}
            variant="solid"
            colorScheme="green"
            onClick={() => {
              if (!toast.isActive(id)) {
                toast({
                  id,
                  title: "Ati adaugat produsul in cos!",
                });
              }
            }}
          >
            <IoCartOutline />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
