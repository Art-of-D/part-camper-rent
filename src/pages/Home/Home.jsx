import style from './Home.module.css';
const Home = () => {
  return (
    <div className={style.heroWrapper}>
      <img
        className={style.heroImage}
        src="/journey.webp"
        alt="camper on the beach"
      ></img>
      <div className={style.heroPhraseWrapper}>
        <h1>"Always the journey, never the destination"</h1>
        <p>Simon Rattle</p>
      </div>
      <div className={style.heroCTAWrapper}>
        <img className={style.heroCTASVG} src="/balloon.svg" alt="ballon" />
        <div className={style.heroCTA}>
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
