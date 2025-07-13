"use client";

import {
  Box,
  Flex,
  Link,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  // Background adapts to light/dark mode
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.700", "gray.200");

  return (
    <Box as="footer" bg={bg} color={color} py={8} mt={16} ml="-100px" >
      <Flex
        maxW="5xl"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        justify="space-between"
      >
        {/* Branding / Title */}
        <Stack
          direction={{ base: "column" }}
          spacing={4}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="https://anpc.ro/" isExternal>
            <Image
              src="/pictures/SAL-PICTOGRAMA.png"
              alt="ANPC"
              width={"72"}
              height={"auto"}
            />
          </Link>
          <Link
            href="https://reclamatiisal.anpc.ro/?_gl=1*1xjwnv6*_ga*MzM2MDczMTg5LjE3NTI0MDI1NTQ.*_ga_FDVTGP2007*czE3NTI0MDI1NTMkbzEkZzEkdDE3NTI0MDMwMDgkajU2JGwwJGgw"
            isExternal
          >
            <Image
              src="/pictures/pictogramaSOL.png"
              alt="ANPC SAL"
              width={"72"}
              height={"auto"}
            />
          </Link>
        </Stack>

        {/* Navigation Links */}
        <Stack
          direction={{ base: "column" }}
          spacing={4}
          mt={{ base: 4, md: 0 }}
        >
          <Text as="b">Linkuri utile</Text>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>
            About
          </Link>
          <Link href="/blog" _hover={{ textDecoration: "underline" }}>
            Politica de returnare
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>
            Livrare
          </Link>
        </Stack>

        {/* Contact details */}
        <Stack
          direction={{ base: "column" }}
          spacing={4}
          mt={{ base: 4, md: 0 }}
        >
            <Text as="b">Detalii de contact</Text>
            <Link href="https://twitter.com/yourhandle" isExternal>
            <Stack direction="row" align="center">
              <Icon as={FaPhone} boxSize={5} />
              <Text>+40 123 456 789</Text>
            </Stack>
          </Link>
          <Link href="https://github.com/yourhandle" isExternal>
          <Stack direction="row" align="center">
            <Icon as={FaEnvelope} boxSize={5} />
            <Text>covestitiu@prost.ro</Text>
            </Stack>
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal>
          <Stack direction="row" align="center">
            <Icon as={FaInstagram} boxSize={5} />
            <Text>bunanusuntcove</Text>
            </Stack>
          </Link>
        </Stack>
      </Flex>
      <Text textAlign="center" fontSize="sm" mt={8}>
          © {new Date().getFullYear()} KrakerShop. All rights reserved.
        </Text>
    </Box>
  );
}
