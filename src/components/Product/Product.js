import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';
import { useMemo, useState } from 'react';

const Product = ({name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name)

  
  const optionSizes = sizeName => {
    if(sizeName !== currentSize){
      setCurrentSize(sizeName);
    }
  }
  const optionColors = colorName => {
    if(colorName !== currentColor){
      setCurrentColor(colorName);
    }
  }
  const price = useMemo(() => {
    let foundSize = sizes.find((element) => element.name == currentSize);
    let foundPrice = foundSize.additionalPrice;

    const sizePrice = basePrice + foundPrice

    return sizePrice;
  }, [currentSize]);

  const addToCard = event => {
    event.preventDefault();
    console.log('Summary');
    console.log('========');
    console.log('Name:', title);
    console.log('Price:', price);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
    
  }
  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor}></ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
        colors={colors}
        sizes={sizes}
        currentColor={currentColor}
        currentSize={currentSize}
        optionColors={optionColors}
        optionSizes={optionSizes}
        onSubmit={addToCard}
        >
        </ProductForm>
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