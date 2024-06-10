function HomeSvg({
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
        d="M12.75 100.444h19.125V62.778h38.25v37.666H89.25v-56.5L51 15.694l-38.25 28.25v56.5zM0 113V37.667L51 0l51 37.667V113H57.375V75.333h-12.75V113H0z"
      ></path>
    </svg>
  );
}

export default HomeSvg;
