import PropTypes from 'prop-types';

import { iconComplete } from '@/assets/images';
import CButton from '@/components/CButton';

import style from './style.module.css';

function CCompletePopup({ onClick }) {
   return (
      <div className={style.backgroundMask}>
         <div className={style.contentContainer}>
            <img src={iconComplete} alt={'icon-complete'} />

            <p className={style.messageTitle}>
               {'Congratulations and thank you for playing!!!'}
            </p>

            <CButton
               title={'Continue'}
               onClick={onClick}
            />
         </div>
      </div>
   );
};

CCompletePopup.propTypes = {
   onClick: PropTypes.func
};

export default CCompletePopup;