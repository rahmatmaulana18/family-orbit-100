import PropTypes from 'prop-types';

import style from './style.module.css';

const CPointCounter = ({ point }) => {
   return (
      <div className={style.mainContainer}>
         <span className={style.pointValueTitle}>
            {point}
            <span className={style.pointTitle}>{' Point'}</span>
         </span>
      </div>
   );
};

CPointCounter.propTypes = {
   point: PropTypes.number
};

export default CPointCounter;