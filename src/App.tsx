import React, { useState } from "react";
import Grid from "./layout/grid";
import GridContainer from "./layout/grid/grid-container";
import Spacer from "./layout/spacer";
import Text from "./text";
import { createTheme, keyframes, styled, TNextUIProvider } from "./theme";

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
};

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts,
  },
});
const lightTheme = createTheme({
  type: "light",
  theme: {
    fonts,
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
  return (
    <TNextUIProvider theme={dark ? darkTheme : lightTheme}>
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
      <button onClick={() => setDark((value) => !value)}>
        {dark ? "dark" : "light"}
      </button>
      <GridContainer gap={2} justify="center">
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
      </GridContainer>
    </TNextUIProvider>
  );
}

export default App;
