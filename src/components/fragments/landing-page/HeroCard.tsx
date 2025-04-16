import "./hero-card.scss";
interface HeroCardProps {
  title: string;
  participant: number;
  date: string;
  eventPicture: string;
}

function HeroCard({ title, participant, date, eventPicture }: HeroCardProps) {
  return (
    <div
      className="hero-card"
      style={{ backgroundImage: `url(${eventPicture})` }}
    >
      <div className="bottom-caption">
        <p className="title">{title}</p>
        <div className="info-container">
          <div className="participant info">
            <img src="./icons/group-icon-white.svg" alt="participant-icon" />
            <p>{participant}</p>
          </div>
          <div className="date info">
            <img src="./icons/time-progress-icon-white.svg" alt="date-icon" />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroCard;
