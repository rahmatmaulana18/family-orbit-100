import { useNavigate } from 'react-router';

import CButton from '@/components/CButton';

import { logo } from '@/assets/images';

import style from './style.module.css';

const LandingScreen = () => {
   let navigate = useNavigate();

   const _handlerStartGame = () => {
      navigate('/survey-select');
   };

   return (
      <div className={style.mainContainer}>
         <img className={style.mainLogo} src={logo} alt={'main-logo'} />

         <CButton title={'Start Game'} onClick={_handlerStartGame} />
      </div>
   );
};

export default LandingScreen;