import style from './PopupReviews.module.css';
import { PopupReview } from './PopupReview/PopupReview';
import { v4 as uuidv4 } from 'uuid';

export const PopupReviews = ({ reviews }) => {
  return (
    <>
      <ul className={style.reviewsList}>
        {reviews.map(review => {
          return <PopupReview key={uuidv4()} singleReview={review} />;
        })}
      </ul>
    </>
  );
};
