import PropTypes from 'prop-types';

import SummaryProductsListItem from './SummaryProductsListItem';

import '../style/SummaryProductsList.css';

const SummaryProductsList = ({ listItems }) => {
   return (
      <div className="transaction-summary-products-list">
         { listItems.map((item) => { return <SummaryProductsListItem key={item.id} item={item} /> }) }
      </div>
   );
};

SummaryProductsList.propTypes = {
   listItems : PropTypes.array
}

export default SummaryProductsList;