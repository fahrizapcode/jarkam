import "./event-card.scss";

interface EventCardProps {
  eventPicture: string;
  title: string;
  deadline: string;
  publisher: string;
  publisherPicture: string;
}


function EventCard({
  eventPicture,
  title,
  deadline,
  publisher,
  publisherPicture,
}: EventCardProps) {
  function limitString(str: string, limit: number) {
    if (str.length > limit) {
      return str.slice(0, limit) + "...";
    }
    return str;
  }
  let limitedTitle = limitString(title, 34);
  let monthNumber = deadline.substring(5, 7);
  let month;
  let date = deadline.substring(8, 10);
  if (monthNumber === "01") {
    month = "Jan";
  } else if (monthNumber === "02") {
    month = "Feb";
  } else if (monthNumber === "03") {
    month = "Mar";
  } else if (monthNumber === "04") {
    month = "Apr";
  } else if (monthNumber === "05") {
    month = "Mei";
  } else if (monthNumber === "06") {
    month = "Jun";
  } else if (monthNumber === "07") {
    month = "Jul";
  } else if (monthNumber === "08") {
    month = "Agu";
  } else if (monthNumber === "09") {
    month = "Sep";
  } else if (monthNumber === "10") {
    month = "Okt";
  } else if (monthNumber === "11") {
    month = "Nov";
  } else if (monthNumber === "12") {
    month = "Des";
  } else {
    month = "Invalid month";
  }
  return (
    <div className="event-card-component">
      <div className="event-picture">
        <img src={eventPicture} alt="eventPicture" height={"100%"} />
      </div>
      <div className="title">
        <p className="title-text">{limitedTitle}</p>
        <div className="deadline">
          <p>
            {date} {month}
          </p>
        </div>
      </div>
      <div className="publisher">
        <div>
          <img src={publisherPicture} alt="publisher-picture" height={"100%"} />
        </div>
        <p>{publisher}</p>
      </div>
    </div>
  );
}

export default EventCard;
