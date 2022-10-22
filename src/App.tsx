import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, styled } from "./theme";
import ThemeProvider from "./theme/theme-provider";

const StyledButton = styled("button", {
  backgroundColor: "$success",
  borderRadius: "9999px",
  fontSize: "13px",
  lineHeight: "1",
  fontWeight: 500,
  paddingTop: "10px",
  color: "$successSolidContrast",
  paddingBottom: "10px",
  paddingLeft: "16px",
  paddingRight: "16px",
  border: "0",
  variants: {
    color: {
      red: { color: "$primarySolidContrast" },
    },
  },

  // Pseudo-class selector
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, .3)",
  },
});

const darkTheme = createTheme({
  type: "dark",
});
const lightTheme = createTheme({
  type: "light",
});

function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeProvider
      disableBaseline={false}
      theme={dark ? darkTheme : lightTheme}
    >
      <div className="App">
        <StyledButton onClick={() => setDark((value) => !value)}>
          Hello
        </StyledButton>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
