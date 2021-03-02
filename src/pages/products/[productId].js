import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Product.module.css'

import products from '../../../products.json';

export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{ product.title } - Snipcart Store</title>
      </Head>
      <Container>
        <div className={styles.product}>
          
          <div className={styles.productImage}>
            <img src={product.image} alt={`Preview of ${product.title}`} />
          </div>

          <div className={styles.productDetails}>

            <h1>{ product.title }</h1>

            <p>{ product.description }</p>

            <p>${ product.price }</p>

            <p>
              <button className="snipcart-add-item"
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.title}
                data-item-url={`/products/${product.id}`}
                data-item-price={product.price}
              >
                Add to Cart
              </button>
            </p>

          </div>

        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const product = products.find(({ id }) => id === productId);
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: products.map(({ id }) => {
      return {
        params: {
          productId: id
        }
      }
    }),
    fallback: false
  };
}