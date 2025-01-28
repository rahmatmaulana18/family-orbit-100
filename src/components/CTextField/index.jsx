import PropTypes from 'prop-types';

import style from './style.module.css';

function CTextField({ maxLength, placeholder, value, onChange }) {
   return (
      <input
         className={style.textField}
         maxLength={maxLength}
         placeholder={placeholder}
         type={'text'}
         value={value}
         onChange={onChange}
      />
   );
};

CTextField.propTypes = {
   maxLength: PropTypes.number,
   placeholder: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func
};

export default CTextField;