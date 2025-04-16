import { useRouter } from "next/router";
import "./button.scss";
export default function BackButton() {
  return (
    <button
      style={{
        width: 34,
        display: "flex",
        alignItems: "center",
        height: 34,
        borderRadius: 6,
        justifyContent: "center",
        transition: "0.3s",
        border: "1px solid #003360",
      }}
      className="back-button"
    >
      <img src="/icons/back-arrow-icon.svg" style={{ width: 24 }} />
    </button>
  );
}
