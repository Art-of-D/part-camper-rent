import style from './PopupReviews.module.css';
import { PopupReview } from './PopupReview/PopupReview';

export const PopupReviews = ({ reviews }) => {
  return (
    <>
      <ul className={style.reviewsList}>
        {reviews.map(review => {
          return <PopupReview singleReview={review} />;
        })}
      </ul>
    </>
  );
};
