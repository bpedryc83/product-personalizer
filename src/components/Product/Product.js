import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(Object.values(props.sizes)[0].name);
  const [extraPrice, setExtraPrice] = useState(parseInt(0));

  let totalPrice;
  
  const calculatePrice = () => totalPrice = props.basePrice + extraPrice;

  const prepareColorClassName = color => styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];

  const showSummaryInConsole = e => {
    e.preventDefault();
    console.log('Name: ', props.title);
    console.log('Price: ', totalPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor)
  }
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{calculatePrice()}$</span>
        </header>
        <form onSubmit={showSummaryInConsole}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={size.name}>
                  <button 
                    type="button" 
                    className={clsx(styles.empty, size.name === currentSize && styles.active)} 
                    onClick={() => {
                      setExtraPrice(size.additionalPrice);
                      setCurrentSize(size.name);
                    }}
                  >
                    {size.name}
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => 
                <li key={color}>
                  <button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrentColor(color)}/>
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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