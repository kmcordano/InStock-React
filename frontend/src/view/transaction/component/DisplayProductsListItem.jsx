import PropTypes from 'prop-types';

import '../style/DisplayProductListItem.css';

const DisplayProductsListItem = ({ item, productOnClick }) => {
   const virtualProduct = item;

   return (
      <div className="transaction-display-products-list-item">
         <div className="transaction-display-products-list-item-button button" onClick={() => { productOnClick(virtualProduct) }}>+</div>
         <p>{item.quantity}</p>
         <p>{item.name}</p>
      </div>
   );
};

DisplayProductsListItem.propTypes = {
   item : PropTypes.object,
   productOnClick : PropTypes.func
}

export default DisplayProductsListItem;