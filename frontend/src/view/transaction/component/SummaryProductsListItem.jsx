

import '../style/SummaryProductsListItem.css'

const SummaryProductsListItem = () => {
   return (
      <div className="transaction-summary-products-list-item">
         <div className="transaction-summary-products-list-item-button button">-</div>
         <div className="transaction-summary-products-list-item-button button">+</div> 
         <p>#</p>
         <p>Product Name</p>
         <div className="transaction-summary-products-list-item-delete-button button">Delete</div>
      </div>
   );
};

export default SummaryProductsListItem;