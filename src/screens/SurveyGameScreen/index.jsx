import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { logo } from '@/assets/images';

import CAnswer from '@/components/CAnswer';
import CPointCounter from '@/components/CPointCounter';
import CQuestion from '@/components/CQuestion';
import CWrongCounter from '@/components/CWrongCounter';

import { getLocalStorage, setLocalStorage } from '@/helpers/function';

import style from './style.module.css';

const SurveySelectScreen = () => {
   const placeholderData = new Array(6).fill(0);
   const selectedSurveyData = getLocalStorage('selectedSurveyData');

   const [isGameOver, setIsGameOver] = useState(false);
   const [isShowCompletePopup, setIsShowCompletePopup] = useState(false);
   const [point, setPoint] = useState(0);
   const [wrongAmount, setWrongAmount] = useState(0);
   const [answerListData, setAnswerListData] = useState(selectedSurveyData?.answers);

   const navigate = useNavigate();
   const { surveyId } = useParams();
   const isStealPoint = wrongAmount == 3;

   const _handlerSubmitAnswer = (val) => {
      if (isGameOver) {
         _handlerUpdateAllAnswerList();
         _handlerCheckCompletion();
      } else {
         _handlerValidateAnswer(val);
      }
   };

   const _handlerValidateAnswer = (val) => {
      let answerId = null;

      answerListData.forEach(answer => {
         const correctAnswer = answer.values.find(answerValue => answerValue.toLowerCase().includes(val.toLowerCase()));

         if (correctAnswer) {
            answerId = answer.id;
         }
      });

      if (answerId) {
         // Correct answer
         _handlerUpdateAnswerList(answerId);
         _handlerUpdatePoint(answerId);
         _handlerCheckCompletion();
      } else if (isStealPoint) {
         // Wrong answer and there are no chances left
         setIsGameOver(true);
      } else {
         // Wrong answer and there still chances
         setWrongAmount(wrongAmount + 1);
      }
   };

   const _handlerUpdateAnswerList = (id) => {
      const newAnswerListData = answerListData.map(item => {
         if (item.id == id) {
            item.isShow = true;
         }
         return item;
      });
      setAnswerListData(newAnswerListData);
   };

   const _handlerUpdatePoint = (id) => {
      const answerData = answerListData.find(item => item.id == id);
      const newPoint = point + answerData.point;
      setPoint(newPoint);
   };

   const _handlerUpdateAllAnswerList = () => {
      const newAnswerListData = answerListData.map(item => {
         item.isShow = true;
         return item;
      });
      setAnswerListData(newAnswerListData);
   };

   const _handlerCheckCompletion = () => {
      let isComplete = true;

      answerListData.forEach(item => {
         if (!item.isShow) {
            isComplete = false;
         }
      });

      if (isComplete) {
         _handlerStoreCompletedSurvey();
         _handlerShowCompletePopup();
      }
   };

   const _handlerStoreCompletedSurvey = () => {
      let currentData = getLocalStorage('completedSurveyData');
      currentData = currentData ? currentData.concat(parseInt(surveyId)) : [parseInt(surveyId)];

      setLocalStorage('completedSurveyData', currentData);
   };

   const _handlerShowCompletePopup = () => {
      setTimeout(() => {
         setIsShowCompletePopup(true);
      }, 2000);
   };

   return (
      <div className={style.mainContainer}>
         <div className={style.contentContainer}>
            <div className={style.headerContainer}>
               <CWrongCounter wrongAmount={wrongAmount} />

               <img className={style.mainLogo} src={logo} alt={'main-logo'} />

               <CPointCounter point={point} />
            </div>

            <CQuestion
               isGameOver={isGameOver}
               isStealPoint={isStealPoint}
               question={selectedSurveyData?.question}
               onSubmit={_handlerSubmitAnswer}
            />

            <div className={style.answerContainer}>
               {
                  placeholderData.map((_, index) => {
                     const data = answerListData?.[index] ?? { id: index + 1, display: index + 1 };
                     const isDisabled = !data?.values;

                     return (
                        <CAnswer
                           isDisabled={isDisabled}
                           isShow={data?.isShow}
                           data={data}
                           key={data?.id}
                        />
                     );
                  })
               }
            </div>
         </div>

         {
            isShowCompletePopup &&
            <div></div>
         }
      </div>
   );
};

export default SurveySelectScreen;