function BriefCaseSvg({
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
      viewBox="0 0 56 52"
    >
      <path
        fill={color}
        d="M50.4 10.947H42V5.474C42 2.455 39.488 0 36.4 0H19.6C16.512 0 14 2.455 14 5.474v5.473H5.6c-3.088 0-5.6 2.455-5.6 5.474v8.21h56v-8.21c0-3.019-2.512-5.474-5.6-5.474zM19.6 5.474h16.8v5.473H19.6V5.474zm14 27.368H22.4v-5.474H0v19.158C0 49.546 2.512 52 5.6 52h44.8c3.088 0 5.6-2.455 5.6-5.474V27.368H33.6v5.474z"
      ></path>
    </svg>
  );
}

export default BriefCaseSvg;
