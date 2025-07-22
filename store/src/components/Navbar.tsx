// components/Navbar.tsx
"use client";

import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { label: "Acasa", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} boxShadow="sm" position="fixed" top="0" w="100%" zIndex="100">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Hamburger for mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Logo / site title */}
        <Box fontWeight="bold" fontSize="lg">
          <ChakraLink href="/" _hover={{ textDecoration: "none", color: "teal.500" }}>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Image
          src="/next.svg"
          alt="Next.js logo"
          width={60}
          height={13}
          priority
        />
              <b>Proiect</b>
            </HStack>
          </ChakraLink>
        </Box>

        {/* Desktop links */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
              <ChakraLink
                key={link.href} href={link.href}
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "gray.200" }}
              >
                {link.label}
              </ChakraLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile drawer/menu */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={2}>
            {Links.map((link) => (
              <NextLink key={link.href} href={link.href} passHref>
                <ChakraLink
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{ textDecoration: "none", bg: "gray.200" }}
                  onClick={onClose}
                >
                  {link.label}
                </ChakraLink>
              </NextLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
);
}
