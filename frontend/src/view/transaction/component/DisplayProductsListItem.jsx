import PropTypes from 'prop-types';

import '../style/DisplayProductListItem.css';

const DisplayProductsListItem = ({ id, quantity, name }) => {
   return (
      <div className="transaction-display-products-list-item">
         <div className="transaction-display-products-list-item-button button">+</div>
         <p>{quantity}</p>
         <p>{name}</p>
      </div>
   );
};

DisplayProductsListItem.propTypes = {
   id : PropTypes.number,
   quantity : PropTypes.number,
   name : PropTypes.string
}

export default DisplayProductsListItem;