import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor.js';
import OptionSize from '../OptionSize/OptionSize.js';
import Button from '../Button/Button.js';
import PropTypes from 'prop-types';

const ProductForm = ({ colors, sizes, currentColor, currentSize, optionSizes, optionColors, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
          <OptionSize sizes={sizes} currentSize={currentSize} optionSizes={optionSizes}></OptionSize>
          <OptionColor colors={colors} currentColor={currentColor} optionColors={optionColors}></OptionColor>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductForm.proptypes = {
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    optionColors: PropTypes.func.isRequired,
    optionSizes: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ProductForm;