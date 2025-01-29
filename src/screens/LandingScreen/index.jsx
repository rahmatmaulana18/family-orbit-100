/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';

import { logo } from '@/assets/images';
import backgroundAudio from '@/assets/audio/background.mp3';
import CButton from '@/components/CButton';
import { playAudio } from '@/helpers/function';
import Transition from '@/transition';

import style from './style.module.css';
import CBackground from '@/components/CBackground';

const BACKGROUND_AUDIO = 'backgroundAudio';

const LandingScreen = () => {
   let navigate = useNavigate();

   const _handlerStartGame = () => {
      navigate('/survey-select');
   };

   return (
      <CBackground>
         <div className={style.mainContainer}>
            <audio id={'backgroundAudio'} src={backgroundAudio} loop={true}></audio>

            <img
               alt={'main-logo'}
               className={style.mainLogo}
               draggable={false}
               src={logo}
               onClick={() => playAudio(BACKGROUND_AUDIO)}
            />

            <CButton title={'Start Game'} onClick={_handlerStartGame} />
         </div>
      </CBackground>
   );
};

export default Transition(LandingScreen);