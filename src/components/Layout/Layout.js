import Nav from '../Nav';
import Footer from '../Footer';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Nav />
      { children }
      <Footer />
    </div>
  )
}

export default Layout;