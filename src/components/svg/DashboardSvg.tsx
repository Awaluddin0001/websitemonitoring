function DashboardSvg({
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
      viewBox="0 0 51 51"
    >
      <path
        fill={color}
        d="M22.87 6.355v10.148a6.378 6.378 0 01-3.96 5.903c-.777.32-1.61.482-2.45.479H6.358A6.232 6.232 0 011.858 21 6.302 6.302 0 010 16.503V6.381A6.38 6.38 0 016.36 0h10.126a6.336 6.336 0 014.501 1.883 6.25 6.25 0 011.884 4.472zM51 6.381v10.122a6.432 6.432 0 01-6.359 6.381H34.49a6.544 6.544 0 01-4.527-1.856 6.381 6.381 0 01-1.858-4.525V6.381a6.247 6.247 0 011.884-4.498A6.333 6.333 0 0134.488 0h10.127A6.439 6.439 0 0151 6.381zm0 28.116v10.121A6.432 6.432 0 0144.641 51H34.49a6.544 6.544 0 01-4.58-1.805 6.33 6.33 0 01-1.858-4.525V34.55a6.252 6.252 0 011.884-4.498 6.334 6.334 0 014.501-1.883h10.127a6.44 6.44 0 016.385 6.381l.052-.052zm-28.13.026v10.121A6.432 6.432 0 0116.46 51H6.358a6.336 6.336 0 01-5.882-3.92A6.326 6.326 0 010 44.645V34.523a6.432 6.432 0 016.359-6.408h10.126c1.697.015 3.321.69 4.527 1.883a6.406 6.406 0 011.858 4.525z"
      ></path>
    </svg>
  );
}

export default DashboardSvg;
