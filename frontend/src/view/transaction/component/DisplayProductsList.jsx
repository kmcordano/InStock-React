

import DisplayProductsListItem from './DisplayProductsListItem';

import '../style/DisplayProductsList.css';

const DisplayProductsList = () => {
   return (
      <div className="transaction-display-products-list">
         <DisplayProductsListItem quantity="#" name="Product" />
         <DisplayProductsListItem quantity="#" name="Product" />
         <DisplayProductsListItem quantity="#" name="Product" />
      </div>
   );
};

export default DisplayProductsList;