import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import api from "../api";
import { Product } from "../types";

interface Props {
  products: Product[];
}

const ProductsPage: NextPage<Props> = ({ products }) => {
  return (
    <main>
      {products.map((product) => (
        <Link key={product.id} href={`/${product.id}`}>
          <a>
            <section>
              <Image
                src={product.image}
                alt={product.title}
                layout="fixed"
                width="200"
                height="300"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </section>
          </a>
        </Link>
      ))}

      <p>
        <Link href="/hot">
          <a>Show Hot</a>
        </Link>
      </p>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const products = await api.list();
  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
