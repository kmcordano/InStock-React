import PropTypes from 'prop-types';

import '../style/DisplayProductListItem.css';

const DisplayProductsListItem = ({ quantity, name }) => {
   return (
      <div className="transaction-display-products-list-item">
         <div className="transaction-display-products-list-item-button button">+</div>
         <p>{quantity}</p>
         <p>{name}</p>
      </div>
   );
};

DisplayProductsListItem.propTypes = {
   quantity : PropTypes.string,
   name : PropTypes.string
}

export default DisplayProductsListItem;