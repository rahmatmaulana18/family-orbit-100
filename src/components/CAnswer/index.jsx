import PropTypes from 'prop-types';

import style from './style.module.css';

const CAnswer = ({ isDisabled, isShow, data }) => {
   return (
      <div className={`${style.answer} ${isDisabled && style.answerDisabled}`}>
         <p className={style.displayTitle}>
            {isShow ? data?.display : data?.id}
         </p>

         {
            isShow &&
            <p className={style.pointTitle}>
               {data?.point}
            </p>
         }
      </div>
   );
};

CAnswer.propTypes = {
   isDisabled: PropTypes.bool,
   isShow: PropTypes.bool,
   data: PropTypes.object
};

export default CAnswer;