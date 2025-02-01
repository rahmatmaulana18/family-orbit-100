/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';

import { logo } from '@/assets/images';
import CBackgroundImage from '@/components/CBackgroundImage';
import CButton from '@/components/CButton';
import { adjustAudioVolume, playAudio } from '@/helpers/function';
import Transition from '@/helpers/transition';

import style from './style.module.css';
import { useEffect } from 'react';

const BACKGROUND_AUDIO = 'backgroundAudio';

const LandingScreen = () => {
   let navigate = useNavigate();

   const _handlerStartGame = () => {
      navigate('/survey-select');
      adjustAudioVolume(BACKGROUND_AUDIO, 0.1);
   };

   useEffect(() => {
      adjustAudioVolume(BACKGROUND_AUDIO, 0.5);
   }, []);

   return (
      <CBackgroundImage>
         <div className={style.mainContainer}>
            <img
               alt={'main-logo'}
               className={style.mainLogo}
               draggable={false}
               id={'mainLogo'}
               src={logo}
               onClick={() => playAudio(BACKGROUND_AUDIO, 0.6)}
            />

            <CButton title={'Start Game'} onClick={_handlerStartGame} />
         </div>
      </CBackgroundImage>
   );
};

export default Transition(LandingScreen);