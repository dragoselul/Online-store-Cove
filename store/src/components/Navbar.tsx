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
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

const iconSize = 24;

const routingLinks = [
  { label: "Catalog", href: "/catalog" },
  { label: "Despre noi", href: "/about" },
];
const shoppingLinks = [
  { label: <IoCartOutline fontSize={iconSize}/>, href: "/cart" },
  { label: <IoPersonOutline fontSize={iconSize}/>, href: "/account" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={"gray.100"} color={"gray.700"} px={4} boxShadow="sm" position="fixed" top="0" w="100%" zIndex="100">
      <Flex h={24} alignItems="center" justifyContent="space-between">
        {/* Desktop links */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {routingLinks.map((link) => (
              <ChakraLink as={NextLink}
                key={link.href} href={link.href}
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "gray.300" }}
              >
                {link.label}
              </ChakraLink>
            
          ))}
        </HStack>
        {/* Hamburger for mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          fontSize={iconSize}
        />

        {/* Logo / site title */}
        <Box fontWeight="bold" fontSize="lg" ml="-40px">
          <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: "none", color: "teal.500" }}>
          <HStack as="nav" spacing={4} display={{ base: "flex" }}>
          <Image
          src="/pictures/logo.png"
          alt="Site logo"
          width={60}
          height={13}
          priority
        />
              <b>Proiect</b>
            </HStack>
          </ChakraLink>
        </Box>
        <HStack as="nav" spacing={4} display={{ base: "inherit", md: "flex" }}>
          {shoppingLinks.map((link) => (
            
              <ChakraLink as={NextLink}
                key={link.href} href={link.href}
                px={3}
                py={2}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "gray.300" }}
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
            {routingLinks.map((link) => (
                <ChakraLink as={NextLink}
                  key={link.href} href={link.href}
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{ textDecoration: "none", bg: "gray.200" }}
                  onClick={onClose}
                >
                  {link.label}
                </ChakraLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
);
}
