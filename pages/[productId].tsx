import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import api from "../api";
import { Product } from "../types";

interface Props {
  product: Product;
}

interface Params extends Record<string, any> {
  productId: string;
}

const ProductsPage: NextPage<Props> = ({ product }) => {
  return (
    <main>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Link href="/">
        <a>Show list</a>
      </Link>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params?.productId) {
    return {
      notFound: true,
    };
  }

  const product = await api.fetch(params.productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const products = await api.list();

  return {
    paths: products.map((product) => ({
      params: {
        productId: product.id,
      },
    })),
    fallback: "blocking",
  };
};

export default ProductsPage;
