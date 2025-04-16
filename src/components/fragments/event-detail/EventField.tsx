import "./eventFieldArray.scss";

interface Props {
  val: string | number;
  icon: string;
  property: string;
}

export default function EventField({ icon, property, val }: Props) {
  console.log(val);
  return (
    <div className="container">
      <img src={icon} alt="" height={60} />
      <p className="prop">{property}</p>
      <p style={{ width: 180 }} className="val">
        {val}
      </p>
    </div>
  );
}
