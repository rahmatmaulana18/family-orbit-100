import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import backgroundAudio from '@/assets/audio/background.mp3';

import LandingScreen from '@/screens/LandingScreen';
import SurveyGameScreen from '@/screens/SurveyGameScreen';
import SurveySelectScreen from '@/screens/SurveySelectScreen';

const BACKGROUND_AUDIO = 'backgroundAudio';

function App() {
   const location = useLocation();

   return (
      <>
         <audio id={BACKGROUND_AUDIO} src={backgroundAudio} loop={true}></audio>

         <AnimatePresence mode={'wait'}>
            <Routes location={location} key={location.pathname}>
               <Route path={'/'} element={<LandingScreen />} />
               <Route path={'/survey-select'} element={<SurveySelectScreen />} />
               <Route path={'/survey-game/:surveyId'} element={<SurveyGameScreen />} />
            </Routes>
         </AnimatePresence>
      </>
   );
};

export default App;
