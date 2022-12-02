import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
    html {
      font-size:16px;
    }
    @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Regular.woff') format('woff');
    }
    @font-face {
      font-family: 'PoppinsBold';
      src: url('/fonts/Poppins-Bold.woff') format('woff');
    }
    @font-face {
      font-family: 'PoppinsMedium';
      src: url('/fonts/Poppins-Medium.woff') format('woff');
    }
      `}
  />
);

const primary = {
  main: "#BE65E6",
  200: "#EDC5FF",
  500: "#BE65E6",
  600: "#BE65E6",
};
const secondary = {
  main: "#2CA3D1",
  200: "#C2EEFF",
  500: "#2CA3D1",
  600: "#2CA3D1",
};

const colors = {
  primary,
  secondary,
  textLight: '#F9F9F9',
};

export const theme = extendTheme({
  colors,
  fonts: {
    body: "Poppins,barlow,sans-serif",
    heading: `"PoppinsBold", sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: "400",
        fontSize: "1rem",
        color: "#1D1D1D",
      },
    },
  },
});
