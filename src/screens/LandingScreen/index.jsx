/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';

import { logo } from '@/assets/images';
import CButton from '@/components/CButton';
import { adjustAudioVolume, playAudio } from '@/helpers/function';
import Transition from '@/transition';

import style from './style.module.css';
import CBackground from '@/components/CBackground';

const BACKGROUND_AUDIO = 'backgroundAudio';

const LandingScreen = () => {
   let navigate = useNavigate();

   const _handlerStartGame = () => {
      navigate('/survey-select');
      adjustAudioVolume(BACKGROUND_AUDIO, 0.1);
   };

   return (
      <CBackground>
         <div className={style.mainContainer}>
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