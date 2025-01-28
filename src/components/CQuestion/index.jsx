import { useState } from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';
import CButton from '../CButton';
import CTextField from '../CTextField';

const CQuestion = ({ isComplete, isGameOver, isStealPoint, question, onSubmit }) => {
   const [answer, setAnswer] = useState('');
   const isShowBadge = isGameOver || isStealPoint;

   const _handlerOnChange = (event) => {
      const value = event.target.value;
      const regex = /^([a-zA-Z0-9 _-]+)$/;
      const isValid = regex.test(value);

      if (!value) {
         setAnswer('');
      } else if (isValid) {
         setAnswer(value);
      }
   };

   const _handlerSubmit = () => {
      if (answer) {
         onSubmit(answer);
      }
   };

   const _handlerGetButtonTitle = () => {
      let title = '';

      if (isComplete) {
         title = 'Finish';
      } else if (isGameOver) {
         title = 'Open All Answers';
      } else {
         title = 'Submit';
      }

      return title;
   };
   const buttonTitle = _handlerGetButtonTitle();

   return (
      <>
         <div className={style.mainContainer}>
            <p className={style.questionTitle}>
               {question}
            </p>

            <div className={style.inputContainer}>
               {
                  !isGameOver &&
                  <CTextField
                     maxLength={40}
                     placeholder={'Type your answer'}
                     value={answer}
                     onChange={_handlerOnChange}
                  />
               }

               <CButton
                  isDisabled={!answer}
                  title={buttonTitle}
                  onClick={_handlerSubmit}
               />
            </div>
         </div>

         <p className={`${style.eventBadge} ${isShowBadge ? style.eventBadgeActive : ''}`}>
            {isGameOver ? 'GAME OVER!' : 'STEALING POINT!'}
         </p>
      </>
   );
};

CQuestion.propTypes = {
   isComplete: PropTypes.bool,
   isGameOver: PropTypes.bool,
   isStealPoint: PropTypes.bool,
   question: PropTypes.string,
   onSubmit: PropTypes.func
};

export default CQuestion;