import { HashRouter, Routes, Route } from 'react-router';

import LandingScreen from './screens/LandingScreen';
import SurveyGameScreen from './screens/SurveyGameScreen';
import SurveySelectScreen from './screens/SurveySelectScreen';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path={'/'} element={<LandingScreen />} />
            <Route path={'/survey-game/:surveyId'} element={<SurveyGameScreen />} />
            <Route path={'/survey-select'} element={<SurveySelectScreen />} />
         </Routes>
      </HashRouter>
   );
};

export default App;
