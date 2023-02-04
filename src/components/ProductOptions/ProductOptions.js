import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = props => {

  const [currentSize, setCurrentSize] = useState(Object.values(props.sizes)[0].name);

  const showSummaryInConsole = e => {
    e.preventDefault();
    console.log('Name: ', props.title);
    console.log('Price: ', props.totalPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', props.currentColor)
  }

  return (
    <form onSubmit={showSummaryInConsole}>
      <OptionSize {...props} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      <OptionColor {...props} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductOptions;