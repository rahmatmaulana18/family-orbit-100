/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';

import { logo } from '@/assets/images';
import CBackgroundImage from '@/components/CBackgroundImage';
import CButton from '@/components/CButton';
import { adjustAudioVolume, playAudio } from '@/helpers/function';
import Transition from '@/helpers/transition';

import style from './style.module.css';

const BACKGROUND_AUDIO = 'backgroundAudio';

const LandingScreen = () => {
   let navigate = useNavigate();

   const _handlerStartGame = () => {
      navigate('/survey-select');
      adjustAudioVolume(BACKGROUND_AUDIO, 0.1);
   };

   return (
      <CBackgroundImage>
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
      </CBackgroundImage>
   );
};

export default Transition(LandingScreen);