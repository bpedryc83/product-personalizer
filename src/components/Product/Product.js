import styles from './Product.module.scss';

import ProductImage from '../ProductImage/ProductImage'
import ProductOptions from '../ProductOptions/ProductOptions';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [extraPrice, setExtraPrice] = useState(0);
    
  const totalPrice = useMemo(() => extraPrice + props.basePrice, [extraPrice]);

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{totalPrice}$</span>
        </header>
        <ProductOptions {...props} setExtraPrice={setExtraPrice} currentColor={currentColor} setCurrentColor={setCurrentColor} totalPrice={totalPrice}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;