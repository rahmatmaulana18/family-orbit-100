import PropTypes from 'prop-types';

import style from './style.module.css';
import { TAP_AUDIO } from '@/helpers/constant';
import { playAudio } from '@/helpers/function';

const COptionButton = ({ isActive, isDisabled, title, onClick }) => {
   return (
      <button
         className={`${style.button} ${isActive ? style.buttonActive : ''} ${isDisabled ? style.buttonDisabled : ''}`}
         disabled={isDisabled}
         onClick={() => {
            playAudio(TAP_AUDIO);
            onClick();
         }}
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