import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';

import styles from '../styles/Home.module.css'

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Snipcart Store
          </h1>

          <p className={styles.description}>
            <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
              <FaShoppingCart />
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price">$0.00</span>
            </a>
          </p>
        </div>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p className={styles.cardDescription}>{ product.description }</p>
                <p>${ product.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Snipcart Store
      </footer>

      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
    </div>
  )
}
