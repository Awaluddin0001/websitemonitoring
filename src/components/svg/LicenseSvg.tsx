function LicenseSvg({
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
      viewBox="0 0 63 55"
    >
      <path
        fill={color}
        d="M33.469 46.98H3.937a3.949 3.949 0 01-2.784-1.147A3.904 3.904 0 010 43.064V3.914c0-1.037.415-2.033 1.153-2.767A3.949 3.949 0 013.937 0h55.126c1.044 0 2.045.412 2.784 1.147A3.903 3.903 0 0163 3.915v20.299a16.44 16.44 0 00-10.644-6.087 16.492 16.492 0 00-11.914 2.956 16.314 16.314 0 00-6.52 10.345 16.25 16.25 0 002.52 11.95l-1.831 2.23-1.142 1.371zM9.844 11.744v3.132h33.468v-3.132H9.844zm0 10.962H31.5v-3.132H9.844v3.132zm0 13.702H29.53v-3.132H9.844v3.132z"
      ></path>
      <path
        fill={color}
        d="M63 34.286a12.304 12.304 0 00-1.506-5.924 12.57 12.57 0 00-4.186-4.514 12.87 12.87 0 00-5.866-2.025 12.93 12.93 0 00-6.143.947 12.694 12.694 0 00-4.951 3.694 12.378 12.378 0 00-2.575 5.557 12.264 12.264 0 00.418 6.091 12.453 12.453 0 003.31 5.169l-3.873 4.644L39.425 55l7.306-8.74a12.72 12.72 0 007.086 0L61.123 55l1.797-7.075-3.873-4.644a12.426 12.426 0 002.917-4.1A12.23 12.23 0 0063 34.287zm-21.44 0a8.45 8.45 0 011.412-4.79 8.686 8.686 0 013.89-3.206 8.874 8.874 0 015.05-.535 8.778 8.778 0 014.497 2.316 8.52 8.52 0 012.42 4.383 8.42 8.42 0 01-.475 4.964 8.599 8.599 0 01-3.212 3.862 8.838 8.838 0 01-4.858 1.452 8.767 8.767 0 01-6.125-2.462 8.449 8.449 0 01-2.578-5.984h-.02z"
      ></path>
    </svg>
  );
}

export default LicenseSvg;
