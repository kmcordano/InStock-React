import PropTypes from 'prop-types';

import DisplayTabBar from './DisplayTabBar';
import DisplayProductsList from './DisplayProductsList';

import '../style/DisplayProducts.css';

const DisplayProducts = ({ productOnClick }) => {
   return (
      <div className="transaction-display-products">
         <DisplayTabBar />
         <DisplayProductsList productOnClick={productOnClick} />
      </div>
   );
};

DisplayProducts.propTypes = {
   productOnClick : PropTypes.func
};

export default DisplayProducts;