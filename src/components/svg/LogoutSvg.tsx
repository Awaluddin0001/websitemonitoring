function LogoutSvg({
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
      viewBox="0 0 53 51"
    >
      <g fill={color}>
        <path d="M25.278 48.532c0-.654.258-1.282.717-1.745a2.435 2.435 0 011.73-.722h19.567a.812.812 0 00.577-.241.826.826 0 00.239-.582V5.758a.826.826 0 00-.24-.582.812.812 0 00-.576-.24H27.724c-.648 0-1.27-.26-1.73-.723a2.479 2.479 0 01-.716-1.745c0-.655.258-1.282.717-1.745A2.435 2.435 0 0127.725 0h19.567C50.442 0 53 2.58 53 5.758v39.484a5.784 5.784 0 01-1.672 4.072A5.682 5.682 0 0147.292 51H27.724c-.648 0-1.27-.26-1.73-.723a2.479 2.479 0 01-.716-1.745z"></path>
        <path d="M39.503 29.169c0 .872-.343 1.71-.955 2.326a3.247 3.247 0 01-2.306.964H20.405c-.075 1.171-.17 2.336-.28 3.507l-.099 1.004a2.375 2.375 0 01-.368 1.06 2.327 2.327 0 01-2.975.841A54.954 54.954 0 01.753 27.228l-.098-.102a2.384 2.384 0 010-3.283l.098-.102a54.952 54.952 0 0115.932-11.645 2.324 2.324 0 012.162.073 2.376 2.376 0 011.18 1.83L20.124 15c.111 1.168.206 2.336.28 3.507h15.838c.865 0 1.694.347 2.306.964.612.617.955 1.454.955 2.326v7.37z"></path>
      </g>
    </svg>
  );
}

export default LogoutSvg;
