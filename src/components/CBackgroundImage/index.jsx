import PropTypes from 'prop-types';

import {
   ornament1,
   ornament2,
   ornament3,
   ornament4,
   ornament5,
   ornament6,
   ornament7,
} from '@/assets/images';

import style from './style.module.css';

function CBackgroundImage({ children }) {
   return (
      <div className={style.mainContainer}>
         <img className={style.ornament1} src={ornament1} alt={'test'} draggable={false} />
         <img className={style.ornament21} src={ornament2} alt={'test'} draggable={false} />
         <img className={style.ornament22} src={ornament2} alt={'test'} draggable={false} />
         <img className={style.ornament31} src={ornament3} alt={'test'} draggable={false} />
         <img className={style.ornament32} src={ornament3} alt={'test'} draggable={false} />
         <img className={style.ornament4} src={ornament4} alt={'test'} draggable={false} />
         <img className={style.ornament5} src={ornament5} alt={'test'} draggable={false} />
         <img className={style.ornament61} src={ornament6} alt={'test'} draggable={false} />
         <img className={style.ornament62} src={ornament6} alt={'test'} draggable={false} />
         <img className={style.ornament71} src={ornament7} alt={'test'} draggable={false} />
         <img className={style.ornament72} src={ornament7} alt={'test'} draggable={false} />

         {children}
      </div>
   );
};

CBackgroundImage.propTypes = {
   children: PropTypes.element
};

export default CBackgroundImage;