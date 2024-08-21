import PropTypes from 'prop-types';

import SummaryProductsListItem from './SummaryProductsListItem';

import '../style/SummaryProductsList.css';

const SummaryProductsList = ({ listItems, productOnDelete }) => {
   return (
      <div className="transaction-summary-products-list">
         { listItems.map((item) => { return <SummaryProductsListItem key={item.id} item={item} productOnDelete={productOnDelete} /> }) }
      </div>
   );
};

SummaryProductsList.propTypes = {
   listItems : PropTypes.array,
   productOnDelete : PropTypes.func
}

export default SummaryProductsList;