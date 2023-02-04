import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {props.sizes.map(size => 
        <li key={size.name}>
          <button 
            type="button" 
            className={clsx(styles.empty, size.name === props.currentSize && styles.active)} 
            onClick={() => {
              props.setExtraPrice(size.additionalPrice);
              props.setCurrentSize(size.name);
            }}
          >
            {size.name}
          </button>
        </li>
      )}
    </ul>
  </div>

OptionSize.propTypes = {
  setExtraPrice: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
}

export default OptionSize;