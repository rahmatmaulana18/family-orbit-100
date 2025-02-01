import {
   applauseAudio,
   backgroundAudio,
   clickAudio,
   correctAudio,
   gameOverLostAudio,
   gameOverWinAudio,
   tapAudio,
   wrongAudio
} from '@/assets/audio';
import {
   APPLAUSE_AUDIO,
   BACKGROUND_AUDIO,
   CLICK_AUDIO,
   CORRECT_AUDIO,
   GAME_OVER_LOST_AUDIO,
   GAME_OVER_WIN_AUDIO,
   TAP_AUDIO,
   WRONG_AUDIO
} from '@/helpers/constant';

const CBackgroundAudio = () => {
   return (
      <>
         <audio id={APPLAUSE_AUDIO} src={applauseAudio}></audio>
         <audio id={BACKGROUND_AUDIO} src={backgroundAudio} loop={true}></audio>
         <audio id={CLICK_AUDIO} src={clickAudio}></audio>
         <audio id={CORRECT_AUDIO} src={correctAudio}></audio>
         <audio id={GAME_OVER_LOST_AUDIO} src={gameOverLostAudio}></audio>
         <audio id={GAME_OVER_WIN_AUDIO} src={gameOverWinAudio}></audio>
         <audio id={TAP_AUDIO} src={tapAudio}></audio>
         <audio id={WRONG_AUDIO} src={wrongAudio}></audio>
      </>
   );
};

export default CBackgroundAudio;