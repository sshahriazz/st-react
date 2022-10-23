import React, { useState } from "react";
import {
  createTheme,
  Grid,
  keyframes,
  Spacer,
  styled,
  Text,
  TNextUIProvider,
} from "stitches-system";
import Box from "./layout/box";

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
};

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts,
    colors: {},
  },
});
const lightTheme = createTheme({
  type: "light",
  theme: {
    fonts,
    colors: {},
  },
});

const scaleUp = keyframes({
  "0%": { color: "$red500" },
  "100%": { color: "$red100" },
});

const StyledText = styled(Text, {
  "&:hover": {
    animation: `${scaleUp} 1000ms`,
  },
});

function App() {
  const [dark, setDark] = useState(false);
  const [rtl, setRtl] = useState(false);
  return (
    <TNextUIProvider theme={dark ? darkTheme : lightTheme}>
      <Box dir={rtl ? "rtl" : "ltr"}>
        <StyledText
          h1
          size={30}
          // css={{
          //   textGradient: "45deg, $blue600 -20%, $pink600 50%",
          // }}
          weight="bold"
        >
          Hover ME
        </StyledText>
        <Spacer y={2} />
        <Grid.Container>
          <Grid>
            <Box
              css={{
                background: "$primary",
                color: "$primarySolidContrast",
                border: "unset",
              }}
              as="button"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? "dark" : "light"}
            </Box>
            <Text h3 css={{ color: "$redTime" }}>
              Text red
            </Text>
          </Grid>
          <Grid>
            <Box
              css={{
                background: "$warning",
                color: "$warningSolidContrast",
                border: "unset",
              }}
              as="button"
              onClick={() => setRtl((value) => !value)}
            >
              {rtl ? "rtl" : "ltr"}
            </Box>
          </Grid>
        </Grid.Container>

        <Text
          h5
          size={20}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          مرحبًا! صباح الخير
        </Text>

        <Grid.Container gap={2} justify="center">
          <Grid xs={4}>
            <Text
              h5
              size={20}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Let's Make the Web Prettier
            </Text>
          </Grid>
          <Grid xs={4}>Item 2</Grid>
          <Grid xs={4}>Item 3</Grid>
          <Grid xs={4}>Item 4</Grid>
        </Grid.Container>
      </Box>
    </TNextUIProvider>
  );
}

export default App;
