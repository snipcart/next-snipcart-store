import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Home.module.css';

import products from '../../products.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Snipcart Store</title>
      </Head>
      <Container className={styles.homeContainer}>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <img src={product.image} alt={`Preview of ${product.title}`} />
                    <h3>{ product.title }</h3>
                    <p className={styles.cardDescription}>{ product.description }</p>
                    <p>${ product.price }</p>
                  </a>
                </Link>
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
            );
          })}
        </div>
      </Container>
    </Layout>
  )
}
