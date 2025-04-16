interface ProfileTitleProps {
  textContent: string;
  titleIcon: string;
}

export default function ProfileTitle({
  textContent,
  titleIcon,
}: ProfileTitleProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: 10,
        marginBottom: 18,
      }}
    >
      <img src={titleIcon} alt="" width={24} />
      <p
        style={{
          fontSize: 18,
          color: "#003360",
          fontWeight: 600,
        }}
      >
        {textContent}
      </p>
    </div>
  );
}
