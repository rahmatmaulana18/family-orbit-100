/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { useNavigate } from 'react-router';

import surveyData from '@/assets/data/survey.json';
import { logo } from '@/assets/images';
import CButton from '@/components/CButton';
import COptionButton from '@/components/COptionButton';
import { getLocalStorage, setLocalStorage } from '@/helpers/function';
import Transition from '@/transition';

import style from './style.module.css';
import CBackground from '@/components/CBackground';

const SurveySelectScreen = () => {
   const [completedSurveyIdData] = useState(getLocalStorage('completedSurveyData'));
   const [surveyListData] = useState(surveyData);
   const [selectedSurveyId, setSelectedSurveyId] = useState(null);

   const navigate = useNavigate();

   const _handlerSelectOption = (id) => {
      setSelectedSurveyId(selectedSurveyId == id ? null : id);
   };

   const _handlerStartGame = () => {
      if (selectedSurveyId) {
         setLocalStorage('selectedSurveyData', surveyListData?.find(item => item?.id == selectedSurveyId));
         navigate(`/survey-game/${selectedSurveyId}`);
      }
   };

   return (
      <CBackground>
         <div className={style.mainContainer}>
            <div className={style.contentContainer}>
               <img
                  alt={'main-logo'}
                  className={style.mainLogo}
                  draggable={false}
                  src={logo}
               />

               <div className={style.optionsContainer}>
                  {
                     surveyListData.map(data => {
                        const id = data?.id;
                        const isActive = id == selectedSurveyId;
                        const isDisabled = completedSurveyIdData?.includes(id);

                        return (
                           <COptionButton
                              isActive={isActive}
                              isDisabled={isDisabled}
                              key={id}
                              title={id?.toString()}
                              onClick={() => _handlerSelectOption(id)}
                           />
                        );
                     })
                  }
               </div>

               <div className={style.ctaContainer}>
                  <h1 className={style.mainTitle}>
                     <span className={style.mainTitleSeparator}>{'| '}</span>
                     {'Select a survey'}
                  </h1>

                  <CButton
                     isDisabled={!selectedSurveyId}
                     title={'Select'}
                     onClick={_handlerStartGame}
                  />
               </div>
            </div>
         </div>
      </CBackground>
   );
};

export default Transition(SurveySelectScreen);