import PLP from './plp/plp';
import styles from './product-app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './cart/cart';

/* eslint-disable-next-line */
export interface ProductAppProps {}

export function ProductApp(props: ProductAppProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductApp!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="pplp" element={<PLP />} />
          <Route path="pcart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <PLP />
    </div>
  );
}

export default ProductApp;
