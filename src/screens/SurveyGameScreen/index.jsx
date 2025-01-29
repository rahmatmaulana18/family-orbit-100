/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { applauseAudio, correctAudio, wrongAudio } from '@/assets/audio';
import { logo } from '@/assets/images';
import CAnswer from '@/components/CAnswer';
import CCompletePopup from '@/components/CCompletePopup';
import CPointCounter from '@/components/CPointCounter';
import CQuestion from '@/components/CQuestion';
import CWrongCounter from '@/components/CWrongCounter';
import { fireConfettiComplete, fireConfettiCorrect } from '@/helpers/confetti';
import { getLocalStorage, playAudio, setLocalStorage } from '@/helpers/function';

import Transition from '@/transition';

import style from './style.module.css';
import CBackground from '@/components/CBackground';

const APPLAUSE_AUDIO = 'applauseAudio';
const CORRECT_AUDIO = 'correctAudio';
const WRONG_AUDIO = 'wrongAudio';

const SurveySelectScreen = () => {
   const placeholderData = new Array(6).fill(0);
   const selectedSurveyData = getLocalStorage('selectedSurveyData');

   const [isComplete, setIsComplete] = useState(false);
   const [isGameOver, setIsGameOver] = useState(false);
   const [isShowCompletePopup, setIsShowCompletePopup] = useState(false);
   const [point, setPoint] = useState(0);
   const [wrongAmount, setWrongAmount] = useState(0);
   const [answerListData, setAnswerListData] = useState(selectedSurveyData?.answers);

   const navigate = useNavigate();
   const { surveyId } = useParams();
   const isStealPoint = wrongAmount == 3;

   const _handlerSubmitAnswer = (val) => {
      if (isComplete) {
         _handlerStoreCompletedSurvey();
         _handlerShowCompletePopup();
         playAudio(APPLAUSE_AUDIO);
      } else if (isGameOver) {
         _handlerUpdateAllAnswerList();
         _handlerCheckCompletion();
         playAudio(CORRECT_AUDIO);
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

      if (answerId && isStealPoint) {
         // Correct answer within stealing point
         _handlerUpdateAnswerList(answerId);
         _handlerUpdatePoint(answerId);
         fireConfettiCorrect();
         playAudio(CORRECT_AUDIO);
         setIsGameOver(true);
      } else if (answerId) {
         // Correct answer and there stil chances
         _handlerUpdateAnswerList(answerId);
         _handlerUpdatePoint(answerId);
         _handlerCheckCompletion();
         fireConfettiCorrect();
         playAudio(CORRECT_AUDIO);
      } else if (isStealPoint) {
         // Wrong answer and there are no chances left
         setIsGameOver(true);
         playAudio(WRONG_AUDIO);
      } else {
         // Wrong answer and there still chances
         setWrongAmount(wrongAmount + 1);
         playAudio(WRONG_AUDIO);
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

      if (isComplete && !isGameOver) {
         // Complete all answer without losing
         setTimeout(() => {
            _handlerStoreCompletedSurvey();
            _handlerShowCompletePopup();
         }, 1000);
      } else if (isComplete) {
         // Complete all answer
         setIsComplete(true);
      }
   };

   const _handlerStoreCompletedSurvey = () => {
      let currentData = getLocalStorage('completedSurveyData');
      currentData = currentData ? currentData.concat(parseInt(surveyId)) : [parseInt(surveyId)];

      setLocalStorage('completedSurveyData', currentData);
   };

   const _handlerShowCompletePopup = () => {
      fireConfettiComplete();
      setIsShowCompletePopup(true);
   };

   return (
      <CBackground>
         <div className={style.mainContainer}>
            <audio id={APPLAUSE_AUDIO} src={applauseAudio}></audio>
            <audio id={CORRECT_AUDIO} src={correctAudio}></audio>
            <audio id={WRONG_AUDIO} src={wrongAudio}></audio>

            <div className={style.contentContainer}>
               <div className={style.headerContainer}>
                  <CWrongCounter wrongAmount={wrongAmount} />

                  <img
                     alt={'main-logo'}
                     className={style.mainLogo}
                     draggable={false}
                     src={logo}
                  />

                  <CPointCounter point={point} />
               </div>

               <CQuestion
                  isComplete={isComplete}
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
               <CCompletePopup onClick={() => navigate('/')} />
            }
         </div>
      </CBackground>
   );
};

export default Transition(SurveySelectScreen);