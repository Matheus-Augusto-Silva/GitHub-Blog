import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./styles/global";
import { RepositoriesProvider } from "./context/AllRepositoriesContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <RepositoriesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </RepositoriesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
