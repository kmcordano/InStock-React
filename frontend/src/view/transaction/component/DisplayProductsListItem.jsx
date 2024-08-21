import PropTypes from 'prop-types';

import '../style/DisplayProductListItem.css';

const DisplayProductsListItem = ({ item }) => {
   return (
      <div className="transaction-display-products-list-item">
         <div className="transaction-display-products-list-item-button button">+</div>
         <p>{item.quantity}</p>
         <p>{item.name}</p>
      </div>
   );
};

DisplayProductsListItem.propTypes = {
   item : PropTypes.object
}

export default DisplayProductsListItem;