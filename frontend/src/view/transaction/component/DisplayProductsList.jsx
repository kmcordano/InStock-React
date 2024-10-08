import PropTypes from 'prop-types';

import DisplayProductsListItem from './DisplayProductsListItem';

import '../style/DisplayProductsList.css';

const DisplayProductsList = ({ productOnClick }) => {
   const products = [
      {
         id : 1,
         name : 'Product 1',
         quantity : 1
      },
      {
         id : 2,
         name : 'Product 2',
         quantity : 2
      },
      {
         id : 3,
         name : 'Product 3',
         quantity : 3
      }
   ];

   return (
      <div className="transaction-display-products-list">
         { products.map((product) => { return <DisplayProductsListItem key={product.id} item={product} productOnClick={productOnClick}/> }) }
      </div>
   );
};

DisplayProductsList.propTypes = {
   productOnClick : PropTypes.func
};

export default DisplayProductsList;