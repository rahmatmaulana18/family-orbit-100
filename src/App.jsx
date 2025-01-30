import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import CBackgroundAudio from '@/components/CBackgroundAudio';
import LandingScreen from '@/screens/LandingScreen';
import SurveyGameScreen from '@/screens/SurveyGameScreen';
import SurveySelectScreen from '@/screens/SurveySelectScreen';

function App() {
   const location = useLocation();

   return (
      <>
         <CBackgroundAudio />

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
