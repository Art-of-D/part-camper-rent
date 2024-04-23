import { SVGRender } from '../../../SVGRender/SVGRender';
import style from './PopupReview.module.css';
import { svgIcons } from '../../../../data/svgIcons';
import { v4 as uuidv4 } from 'uuid';

export const PopupReview = ({
  singleReview: { reviewer_name, reviewer_rating, comment },
}) => {
  const MAX_STARS = 5;
  const goldStars = Math.floor(reviewer_rating);
  const grayStars = MAX_STARS - goldStars;
  const reviewerFirstLetter = reviewer_name.charAt(0);

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < goldStars; i++) {
      stars.push(
        <li key={uuidv4()}>
          <SVGRender
            className={style.reviewStar}
            svgString={svgIcons.star.svgIcon}
          />
        </li>
      );
    }
    for (let i = 0; i < grayStars; i++) {
      stars.push(
        <li key={uuidv4()}>
          <SVGRender
            className={style.reviewStar}
            svgString={svgIcons.grayStar.svgIcon}
          />
        </li>
      );
    }
    return stars;
  };
  return (
    <>
      <li key={uuidv4()} className={style.review}>
        <div className={style.reviewInfoWrapper}>
          <div className={style.reviewerIcon}>
            <p className={style.reviewerFirstLetter}>{reviewerFirstLetter}</p>
          </div>
          <div className={style.reviewerWrapper}>
            <h4>{reviewer_name}</h4>
            <ul className={style.reviewStarList}>{renderStars()}</ul>
          </div>
        </div>
        <p className={style.reviewerText}>{comment}</p>
      </li>
    </>
  );
};
