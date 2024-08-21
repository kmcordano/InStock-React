import PropTypes from 'prop-types';

import '../style/SummaryProductsListItem.css'

const SummaryProductsListItem = ({ item, productOnDelete }) => {
   return (
      <div className="transaction-summary-products-list-item">
         <div className="transaction-summary-products-list-item-button button">-</div>
         <div className="transaction-summary-products-list-item-button button">+</div> 
         <p>{item.quantity}</p>
         <p>{item.name}</p>
         <div className="transaction-summary-products-list-item-delete-button button" onClick={() => { productOnDelete(item) }}>Delete</div>
      </div>
   );
};

SummaryProductsListItem.propTypes = {
   item : PropTypes.object,
   productOnDelete : PropTypes.func
};

export default SummaryProductsListItem;