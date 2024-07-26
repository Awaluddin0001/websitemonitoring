function MinusSvg({
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
      viewBox="0 0 53 13"
    >
      <path
        fill={color}
        d="M46.375 0H6.625A6.69 6.69 0 001.94 1.904 6.438 6.438 0 000 6.5c0 1.724.698 3.377 1.94 4.596A6.69 6.69 0 006.625 13h39.75a6.69 6.69 0 004.685-1.904A6.439 6.439 0 0053 6.5a6.439 6.439 0 00-1.94-4.596A6.69 6.69 0 0046.375 0z"
      ></path>
    </svg>
  );
}

export default MinusSvg;
