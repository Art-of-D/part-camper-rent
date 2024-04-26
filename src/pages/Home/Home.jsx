import style from './Home.module.css';
import { Link } from 'react-router-dom';
import heroImgUrl from '/journey.webp';
import balloonSVG from '/balloon.svg';

const Home = () => {
  return (
    <div className={style.heroWrapper}>
      <img
        className={style.heroImage}
        src={heroImgUrl}
        alt="camper on the beach"
      ></img>
      <div className={style.heroPhraseWrapper}>
        <h1>"Always the journey, never the destination"</h1>
        <p>Simon Rattle</p>
      </div>
      <Link to={'/catalog'} className={style.heroCTAWrapper}>
        <img className={style.heroCTASVG} src={balloonSVG} alt="ballon" />
        <div className={style.heroCTA}>
          <p>Rent a camper</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
