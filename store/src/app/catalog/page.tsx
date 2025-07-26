import { Container, SimpleGrid, } from "@chakra-ui/react";
import styles from "../page.module.css";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/model/product";

export default function Catalog() {
  const products: Product[] = [
    {
        id: 1,
        name: "Produs 1",
        description: new Map([
          ["Overview", "Descriere produs 1"],
        ]),
        price: 19.99,
        images: null,
    },
    {

        id: 2,
        name: "Produs 2",
        description: new Map([
          ["Overview", "Descriere produs 2"],
        ]),
        price: 29.99,
        images: null,
    },
    {
        id: 3,
        name: "Produs 3",
        description: new Map([
          ["Overview", "Descriere produs 3"],
        ]),
        price: 39.99,
        images: null,
    },
    {

        id: 4,
        name: "Produs 4",
        description: new Map([
          ["Overview", "Descriere produs 4"],
        ]),
        price: 49.99,
        images: null,
    },
    {
        id: 5,
        name: "Produs 5",
        description: new Map([
          ["Overview", "Descriere produs 5"],
        ]),
        price: 59.99,
        images: null,
    },
    {
        id: 6,
        name: "Produs 6",
        description: new Map([
          ["Overview", "Descriere produs 6"],
        ]),
        price: 69.99,
        images: null,
    },
  ];

  return (
    <Container className={styles.catalog} maxW="container.2xl" py={28}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl:5 }} // adjust breakpoints as you like
        spacing={6}
      >
        {products.map((p : Product) => (
            <ProductCard key={p.id} {...p}/>
        ))}
      </SimpleGrid>
    </Container>
  );
}
