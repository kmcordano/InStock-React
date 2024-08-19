

import DisplayTabBar from './DisplayTabBar';
import DisplayProductsList from './DisplayProductsList';

import '../style/DisplayProducts.css';

const DisplayProducts = () => {
   return (
      <div className="transaction-display-products">
         <DisplayTabBar />
         <DisplayProductsList />
      </div>
   );
}

export default DisplayProducts;