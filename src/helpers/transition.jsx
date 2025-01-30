import { motion } from 'framer-motion';
import { logoWhite } from '@/assets/images';

const Transition = (OgComponent) => {
   // eslint-disable-next-line react/display-name
   return () => (
      <>
         <OgComponent />

         <motion.div
            className={'slide-in'}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
         >
            <img className={'slide-logo'} src={logoWhite} alt={'transition-logo'} />
         </motion.div>

         <motion.div
            className={'slide-out'}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
         />
      </>
   );
};

export default Transition;