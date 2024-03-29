import { Link, useLocation } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";

import { IArticles } from "types";
import { selectFilterValue } from "redux/selectors";
import formatServices from "services/services";
import hooks from "hooks";

import styles from "./Card.module.scss";

const { useAppSelector } = hooks;

export const Card: React.FunctionComponent<IArticles> = ({
  articleId,
  image,
  published,
  description,
  title,
}) => {
  const location = useLocation();
  const filterValue = useAppSelector(selectFilterValue);
  const newTitle = formatServices.highlightSearchResults(
    filterValue,
    formatServices.formatTitle(title)
  );
  const newDescr = formatServices.highlightSearchResults(
    filterValue,
    description
  );
  const formattedDate = formatServices.formatDate(published);

  return (
    <li className={styles.card}>
      <Link
        className={styles.card__link}
        to={`/${articleId}`}
        state={{ from: location }}
      >
        <div className={styles.thumb}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.card__box}>
          <div className={styles.card__contentBox}>
            <p className={styles.card__date}>
              <CiCalendar size={16} style={{ color: "currentColor" }} />
              {formattedDate}
            </p>
            <div className={styles.card__info}>
              <h2 className={styles.card__title}>{newTitle}</h2>
              <p className={styles.card__description}>{newDescr}</p>
            </div>
          </div>
          <div className={styles.card__arrow}>
            <span>Read more</span>
            <BsArrowRightShort size={28} />
          </div>
        </div>
      </Link>
    </li>
  );
};
