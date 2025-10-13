import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storeManagement/store.ts";
import { useTheme } from "./hooks/useTheme";

// Create a wrapper component to use the theme hook
const AppWithTheme = () => {
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithTheme />
    </BrowserRouter>
  </Provider>
);
