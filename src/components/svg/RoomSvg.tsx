function RoomSvg({
  color = "#000",
  width = "102",
  height = "113",
}: {
  color?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 102 113"
    >
      <path
        fill={color}
        d="M62.333 18.833V113H0v-12.556h11.333V0h51v6.278h28.334v94.166H102V113H79.333V18.833h-17zm-22.666 31.39v12.555H51V50.222H39.667z"
      ></path>
    </svg>
  );
}

export default RoomSvg;
