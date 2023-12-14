import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, optionSizes }) => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size =>
              <li key={size}>
                <button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={() => optionSizes(size.name)}>{size.name}</button>
                </li>
              )}
            </ul>
          </div>
    )
}

OptionSize.proptypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    optionSizes: PropTypes.func.isRequired,
};

export default OptionSize;