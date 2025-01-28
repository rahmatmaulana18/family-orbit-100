import PropTypes from 'prop-types';

import { iconFailed } from '@/assets/images';

import style from './style.module.css';

const CWrongCounter = ({ wrongAmount }) => {
   const data = [1, 2, 3];

   return (
      <div className={style.mainContainer}>
         {
            data.map(item => {
               const isActive = wrongAmount >= item;

               return (
                  <img
                     className={`${style.icon} ${isActive ? style.iconActive : ''}`}
                     key={item}
                     src={iconFailed}
                     alt={'icon-failed'}
                  />
               );
            })
         }
      </div>
   );
};

CWrongCounter.propTypes = {
   wrongAmount: PropTypes.number
};

export default CWrongCounter;