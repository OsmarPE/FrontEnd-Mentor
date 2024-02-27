import elipsis from "../assets/images/icon-ellipsis.svg";
import { modeTime, tracking } from "../type";
import "./card.css";

interface Props {
  item: tracking;
  mode: modeTime;
}

function Card({ item, mode }: Props) {
  const { title, timeframes } = item;

  const hours = timeframes[mode].current;
  const hoursPrev = timeframes[mode].previous;

  return (
    <article className={`card ${title.toLocaleLowerCase()}`}>
      <div className="card__body">
        <div className="card__heading">
          <h3 className="card__title">{title}</h3>
          <button className="card__btn">
            <img src={elipsis} alt={`image of ${title}`} />
          </button>
        </div>
        <div className="card__footer">
          <span className="card__time">{hours}hrs</span>
          <p className="card__text">Last Week - {hoursPrev}hrs</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
