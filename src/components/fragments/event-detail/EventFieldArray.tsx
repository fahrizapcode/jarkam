import "./eventFieldArray.scss";

interface Props {
  val: string[];
  icon: string;
  property: string;
}

export default function EventFieldArray({ icon, property, val }: Props) {
  console.log(val);
  return (
    <div className="container">
      <img src={icon} alt="" height={60} />
      <p style={{ fontWeight: 600 }}>{property}</p>
      <ul>
        {val.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
