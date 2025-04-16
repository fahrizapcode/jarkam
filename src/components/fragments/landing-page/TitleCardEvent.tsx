import "./title-card-event.scss";

interface TitleCardEventProps {
  image: string;
  textContent: string;
}
function TitleCardEvent({ image, textContent }: TitleCardEventProps) {
  return (
    <div className="title-card-event">
      <img src={image} alt="image" />
      <h1>{textContent}</h1>
    </div>
  );
}

export default TitleCardEvent;
