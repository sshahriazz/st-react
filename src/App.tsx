import React, { useState } from "react";
import Grid from "./layout/grid";
import GridContainer from "./layout/grid/grid-container";
import Spacer from "./layout/spacer";
import Text from "./text";
import { createTheme, TNextUIProvider } from "./theme";

const darkTheme = createTheme({
  type: "dark",
});
const lightTheme = createTheme({
  type: "light",
});

function App() {
  const [dark, setDark] = useState(false);
  return (
    <TNextUIProvider theme={dark ? darkTheme : lightTheme}>
      <p>hello world</p>
      <Spacer y={2} />
      <button onClick={() => setDark((value) => !value)}>Hello</button>
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
