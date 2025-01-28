import PropTypes from 'prop-types';

import style from './style.module.css';

const COptionButton = ({ isActive, isDisabled, title, onClick }) => {
   return (
      <button
         className={`${style.button} ${isActive ? style.buttonActive : ''} ${isDisabled ? style.buttonDisabled : ''}`}
         disabled={isDisabled}
         onClick={onClick}
      >
         {title}
      </button>
   );
};

COptionButton.propTypes = {
   isActive: PropTypes.bool,
   isDisabled: PropTypes.bool,
   title: PropTypes.string,
   onClick: PropTypes.func
};

export default COptionButton