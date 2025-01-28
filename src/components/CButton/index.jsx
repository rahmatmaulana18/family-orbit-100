import PropTypes from 'prop-types';

import style from './style.module.css';

function CButton({ isDisabled, title, onClick }) {
   return (
      <button
         className={`${style.button} ${isDisabled ? style.buttonDisabled : ''}`}
         disabled={isDisabled}
         onClick={onClick}
      >
         {title}
      </button>
   );
};

CButton.propTypes = {
   isDisabled: PropTypes.bool,
   title: PropTypes.string,
   onClick: PropTypes.func
};

export default CButton;