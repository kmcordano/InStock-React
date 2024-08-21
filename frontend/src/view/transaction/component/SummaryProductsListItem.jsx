import PropTypes from 'prop-types';

import '../style/SummaryProductsListItem.css'

const SummaryProductsListItem = ({ item }) => {
   return (
      <div className="transaction-summary-products-list-item">
         <div className="transaction-summary-products-list-item-button button">-</div>
         <div className="transaction-summary-products-list-item-button button">+</div> 
         <p>{item.quantity}</p>
         <p>{item.name}</p>
         <div className="transaction-summary-products-list-item-delete-button button">Delete</div>
      </div>
   );
};

SummaryProductsListItem.propTypes = {
   item : PropTypes.object
};

export default SummaryProductsListItem;