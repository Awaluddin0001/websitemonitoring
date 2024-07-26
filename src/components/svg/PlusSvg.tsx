function PlusSvg({
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
      viewBox="0 0 53 53"
    >
      <path
        fill={color}
        d="M46.375 19.875h-13.25V6.625a6.625 6.625 0 00-13.25 0l.235 13.25H6.625a6.625 6.625 0 000 13.25l13.485-.235-.235 13.485a6.625 6.625 0 1013.25 0V32.89l13.25.235a6.625 6.625 0 100-13.25z"
      ></path>
    </svg>
  );
}

export default PlusSvg;
