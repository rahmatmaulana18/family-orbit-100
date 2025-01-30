import PropTypes from 'prop-types';

import style from './style.module.css';
import { CLICK_AUDIO } from '@/helpers/constant';
import { playAudio } from '@/helpers/function';

function CButton({ isDisabled, title, onClick }) {
   return (
      <button
         className={`${style.button} ${isDisabled ? style.buttonDisabled : ''}`}
         disabled={isDisabled}
         onClick={() => {
            onClick();
            playAudio(CLICK_AUDIO);
         }}
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